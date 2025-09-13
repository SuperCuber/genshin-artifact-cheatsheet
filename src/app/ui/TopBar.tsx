import React from "react";
import styles from "./TopBar.module.css";
import { Character } from "../lib/data";
import CharacterFilterDialog from "./CharacterFilterDialog";

interface TopBarProps {
    selectedCharacters: Character[];
    setSelectedCharacters: (characters: Character[]) => void;
}

const TopBar: React.FC<TopBarProps> = ({ selectedCharacters, setSelectedCharacters }) => {
    return (
        <header className={styles.topbar}>
            <h1 className={styles.title}>Genshin Impact Artifact Cheatsheet</h1>
            <div className={styles.actions}>
                <CharacterFilterDialog
                    selectedCharacters={selectedCharacters}
                    setSelectedCharacters={setSelectedCharacters}
                />
            </div>
        </header>
    );
};

export default TopBar;
