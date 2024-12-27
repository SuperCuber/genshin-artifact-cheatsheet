"use client";

import styles from "./page.module.css";
import { allCharacters, ArtifactSet, builds, Character, groupByArtifact } from "./lib/data";
import ArtifactBuilds from "./ui/ArtifactBuilds";
import React, { useEffect } from "react";
import CharacterFilter from "./ui/CharacterFilter";

export default function Home() {
    const artifacts = groupByArtifact(builds);

    const [selectedCharacters, setSelectedCharacters] = React.useState<Character[]>([]);
    const [filteredArtifacts, setFilteredArtifacts] = React.useState(artifacts);

    useEffect(() => {
        // Using localStorage -> must be in useEffect
        setSelectedCharacters(JSON.parse(localStorage.getItem("selectedCharacters") || "null") || allCharacters)
    }, []);

    useEffect(() => {
        const entries = Object.entries(artifacts);
        const filtered = entries.map(([set, builds]) =>
            [set, builds.filter(b => selectedCharacters.includes(b.character))]);
        setFilteredArtifacts(Object.fromEntries(filtered));
    }, [selectedCharacters, artifacts]);

    useEffect(() => {
        localStorage.setItem("selectedCharacters", JSON.stringify(selectedCharacters));
    }, [selectedCharacters]);

    return (
        <main className={styles.main}>
            <h1>Genshin Impact Artifact Cheatsheet</h1>
            <div className={styles.filters}>
                <CharacterFilter selectedCharacters={selectedCharacters} setSelectedCharacters={setSelectedCharacters} />
            </div>
            <div className={styles.artifact_sets}>
                {Object.entries(filteredArtifacts).map(([artifactName, characterBuilds]) => (
                    <ArtifactBuilds
                        key={artifactName}
                        artifactName={artifactName as ArtifactSet}
                        characterBuilds={characterBuilds}
                    />
                ))}
            </div>
        </main>
    );
}
