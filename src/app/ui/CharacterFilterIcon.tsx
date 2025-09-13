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
        <div 
            onClick={onClick}
            className={`${styles.character_icon} ${selected ? styles.selected : styles.deselected}`}
        >
            <Image
                src={characterIcons[character]}
                alt={character}
                width={64}
                height={64}
            />
        </div>
    );
};

export default CharacterFilterIcon;
