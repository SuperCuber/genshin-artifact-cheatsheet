import React from "react";
import Image from "next/image";
import styles from "./ArtifactBuilds.module.css";
import { ArtifactSet, BuildSpecificSet, Character, CircletIcon, GobletIcon, SandsIcon, artifactIcons } from "../lib/data";
import CharacterBuildIcon from "./CharacterBuildIcon";

interface ArtifactBuildsProps {
    artifactName: ArtifactSet;
    characterBuilds: {
        character: Character;
        build: BuildSpecificSet;
    }[];
}

const ArtifactBuilds: React.FC<ArtifactBuildsProps> = ({ artifactName, characterBuilds }) => {
    // TODO: sort by some global primary stat order
    // TODO: support highlighting later
    const sandsStats = [...new Set(characterBuilds.flatMap(cb => cb.build.mainStats.sands))];
    const gobletStats = [...new Set(characterBuilds.flatMap(cb => cb.build.mainStats.goblet))];
    const circletStats = [...new Set(characterBuilds.flatMap(cb => cb.build.mainStats.circlet))];

    const subStats = [...new Set(characterBuilds.flatMap(cb => cb.build.subStats))];

    return (
        <div className={styles.artifact_builds}>
            <div className={styles.top_row}>
                <Image
                    src={artifactIcons[artifactName]}
                    alt={artifactName}
                    width={128}
                    height={128} />
                <h2>{artifactName}</h2>
            </div>
            <div className={styles.character_icons}>
                {characterBuilds.map(({ character, build }) => (
                    <CharacterBuildIcon key={character + build.playstyle + build.set.pieces} character={character} build={build} />
                ))}
            </div>
            <h3>Main Stats</h3>
            <div className={styles.main_stats}>
                <div><Image src={SandsIcon} alt="Sands" width="32" height="32" />
                    {sandsStats.join(" | ")}</div>
                <div><Image src={GobletIcon} alt="Goblet" width="32" height="32" />
                    {gobletStats.join(" | ")}</div>
                <div><Image src={CircletIcon} alt="Circlet" width="32" height="32" />
                    {circletStats.join(" | ")}</div>
            </div>
            <h3>Substats</h3>
            <div>{subStats.join(" | ")}</div>
        </div>
    );
};

export default ArtifactBuilds;
