"use client";

import styles from "./page.module.css";
import { allCharacters, artifactIcons, ArtifactSet, builds, BuildsByArtifact, Character, groupByArtifact } from "./lib/data";
import ArtifactBuilds from "./ui/ArtifactBuilds";
import React, { useEffect } from "react";
import CharacterFilter from "./ui/CharacterFilter";
import Image from "next/image";
import SearchBar from "./ui/SearchBar";
import { mapObject } from "./lib/util";

export default function Home() {
    const artifacts = groupByArtifact(builds);

    // == Selected Characters ==

    const [selectedCharacters, setSelectedCharacters] = React.useState<Character[]>(allCharacters);
    const [filteredArtifacts, setFilteredArtifacts] = React.useState(artifacts);

    // Load selected characters
    useEffect(() => {
        // Using localStorage -> must be in useEffect
        setSelectedCharacters(JSON.parse(localStorage.getItem("selectedCharacters") || "null") || allCharacters)
    }, []);

    // Save selected characters
    useEffect(() => {
        localStorage.setItem("selectedCharacters", JSON.stringify(selectedCharacters));
    }, [selectedCharacters]);

    // == Search Bar ==

    const [textSearch, setTextSearch] = React.useState<string>();
    const searchInputRef = React.useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "f" && e.ctrlKey) {
                e.preventDefault();
                // Needed to prevent "stale closure problem"
                setTextSearch((prevTextSearch) => {
                    if (prevTextSearch === undefined) {
                        return "";
                    }
                    return prevTextSearch;
                });
                setTimeout(() => searchInputRef.current?.focus(), 0);
            }
        }
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, []);

    // Filter artifacts based on selected characters and search bar
    useEffect(() => {
        let filtered = mapObject(artifacts, (_, builds) =>
            builds.filter(b => selectedCharacters.includes(b.character))) as BuildsByArtifact;

        if (textSearch !== undefined && textSearch !== "") {
            filtered = mapObject(filtered, (artifact, builds) =>
                artifact.toLowerCase().includes(textSearch.toLowerCase())
                    ? builds
                    : builds.filter(b => b.character.toLowerCase().includes(textSearch.toLowerCase()))
            ) as BuildsByArtifact;
        }


        setFilteredArtifacts(filtered);
    }, [selectedCharacters, textSearch]);

    return (
        <main className={styles.main}>
            <h1>Genshin Impact Artifact Cheatsheet</h1>
            {textSearch !== undefined &&
                <SearchBar textFilter={textSearch} setTextFilter={setTextSearch} inputRef={searchInputRef} />}
            <div className={styles.filters}>
                <CharacterFilter selectedCharacters={selectedCharacters} setSelectedCharacters={setSelectedCharacters} />
            </div>
            <div className={styles.artifact_sets}>
                {Object.entries(filteredArtifacts).filter(([_, builds]) => builds.length > 0).map(
                    ([artifactName, characterBuilds]) => (
                        <ArtifactBuilds
                            key={artifactName}
                            artifactName={artifactName as ArtifactSet}
                            characterBuilds={characterBuilds}
                        />
                    ))}
                {Object.entries(filteredArtifacts).flatMap(([_, builds]) => builds).length == 0 &&
                    <h2>No results :(</h2>}
            </div>
            <div className={styles.filtered_sets}>
                <h2>Sets with no corresponding characters</h2>
                {Object.entries(filteredArtifacts)
                    .filter(([_, builds]) => builds.length == 0)
                    .filter(([artifactName, _]) => artifactName.toLowerCase().includes(textSearch?.toLowerCase() || ""))
                    .map(
                        ([artifactName, _]) => (
                            <div key={artifactName} className={styles.filtered_set}>
                                <Image src={artifactIcons[artifactName as ArtifactSet]}
                                    alt={artifactName}
                                    width={64}
                                    height={64}
                                />
                                {artifactName}
                            </div>
                        ))}
            </div>
        </main>
    );
}
