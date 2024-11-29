import React from "react";
import Image from "next/image";
// import styles from "./CharacterBuildIcon.module.css";
import { BuildSpecificSet, Character, characterIcons } from "../lib/data";

interface CharacterBuildIconProps {
    character: Character;
    builds: BuildSpecificSet[];
}

// TODO: multiple playstyles of the same character and set need to go into the same icon. accept build[]
const CharacterBuildIcon: React.FC<CharacterBuildIconProps> = ({ character, builds }) => {
    return (
        <Image src={characterIcons[character]} alt={character} width={64} height={64} />
    );
};

export default CharacterBuildIcon;
