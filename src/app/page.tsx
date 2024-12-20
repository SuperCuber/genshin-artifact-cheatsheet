"use client";

import styles from "./page.module.css";
import { allCharacters, ArtifactSet, builds, Character, groupByArtifact } from "./lib/data";
import ArtifactBuilds from "./ui/ArtifactBuilds";
import React, { useEffect } from "react";
import CharacterFilter from "./ui/CharacterFilter";

interface Filters {
    // TODO: implement dis
    selectedCharacters: Character[];
    minimumPriority: number;
}

export default function Home() {
    const artifacts = groupByArtifact(builds);

    const [selectedCharacters, setSelectedCharacters] = React.useState<Character[]>(JSON.parse(localStorage.getItem("selectedCharacters") || "null") || allCharacters);
    const [filteredArtifacts, setFilteredArtifacts] = React.useState(artifacts);

    useEffect(() => {
        let entries = Object.entries(artifacts);
        let filtered = entries.map(([set, builds]) =>
            [set, builds.filter(b => selectedCharacters.includes(b.character))]);
        setFilteredArtifacts(Object.fromEntries(filtered));
    }, [selectedCharacters]);

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
