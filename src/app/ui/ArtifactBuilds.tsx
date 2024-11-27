import React from "react";
import Image from "next/image";
import { ArtifactSet, Build, Character, artifactIcons } from "../lib/data";

interface ArtifactBuildsProps {
    artifactName: ArtifactSet;
    characterBuilds: {
        character: Character;
        build: Build;
    }[];
}

const ArtifactBuilds: React.FC<ArtifactBuildsProps> = ({ artifactName, characterBuilds }) => {
    const icon = artifactIcons[artifactName];
    return (
        <div><Image src={icon} alt={artifactName} /> {artifactName}
            {characterBuilds.map(({ character, build }) => (
                <div key={character}>
                    {character}: {build.playstyle}
                </div>
            ))}
        </div>
    );
};

export default ArtifactBuilds;
