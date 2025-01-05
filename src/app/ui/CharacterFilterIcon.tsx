import React from "react";
import Image from "next/image";
import styles from "./CharacterFilterIcon.module.css";
import { Character, characterIcons } from "../lib/data";

interface CharacterFilterIconProps {
    character: Character;
    selected: boolean;
    onClick: () => void;
}

const CharacterFilterIcon: React.FC<CharacterFilterIconProps> = ({ character, selected, onClick }) => {
    return (
        <Image
            src={characterIcons[character]}
            alt={character}
            width={64}
            height={64}
            onClick={onClick}
            className={selected ? styles.selected : styles.deselected }
        />
    );
};

export default CharacterFilterIcon;
