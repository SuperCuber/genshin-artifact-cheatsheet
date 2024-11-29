"use client";

import styles from "./page.module.css";
import { ArtifactSet, builds, Character, groupByArtifact } from "./lib/data";
import ArtifactBuilds from "./ui/ArtifactBuilds";
import { characters } from "./lib/data/_images";
import CharacterFilterIcon from "./ui/CharacterFilterIcon";
import React, { useEffect } from "react";

export default function Home() {
    const artifacts = groupByArtifact(builds);
    const allCharacters = Object.keys(characters) as Character[];

    const [selectedCharacters, setSelectedCharacters] = React.useState<Character[]>(allCharacters);
    const [filteredArtifacts, setFilteredArtifacts] = React.useState(artifacts);

    useEffect(() => {
        let entries = Object.entries(artifacts);
        let filtered = entries.map(([set, builds]) =>
            [set, builds.filter(b => selectedCharacters.includes(b.character))]);
        setFilteredArtifacts(Object.fromEntries(filtered));
    }, [selectedCharacters]);

    return (
        <main className={styles.main}>
            <h1>Genshin Impact Artifact Cheatsheet</h1>
            <div className={styles.filters}>
                Character filter:
                <div className={styles.character_filters}>
                    {allCharacters.map(character =>
                        <CharacterFilterIcon
                            key={character}
                            character={character as Character}
                            selected={selectedCharacters.includes(character)}
                            onClick={() => setSelectedCharacters(
                                selectedCharacters.includes(character)
                                    ? selectedCharacters.filter(c => c !== character)
                                    : [...selectedCharacters, character]
                            )}
                        />)}
                </div>
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
