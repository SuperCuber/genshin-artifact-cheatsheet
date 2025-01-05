import React from "react";
import Image from "next/image";
// import styles from "./CharacterBuildIcon.module.css";
import { BuildSpecificSet, Character, characterIcons } from "../lib/data";

interface CharacterBuildIconProps {
    character: Character;
    builds: BuildSpecificSet[];
}

const CharacterBuildIcon: React.FC<CharacterBuildIconProps> = ({ character }) => {
    return (
        <Image src={characterIcons[character]} alt={character} width={64} height={64} />
    );
};

export default CharacterBuildIcon;
