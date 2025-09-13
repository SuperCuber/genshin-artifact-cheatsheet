import React from "react";
import styles from "./CharacterFilterDialog.module.css";
import { Character } from "../lib/data";
import CharacterFilter from "./CharacterFilter";

interface CharacterFilterDialogProps {
    selectedCharacters: Character[];
    setSelectedCharacters: (characters: Character[]) => void;
}

const CharacterFilterDialog: React.FC<CharacterFilterDialogProps> = ({ 
    selectedCharacters, 
    setSelectedCharacters 
}) => {
    const dialogRef = React.useRef<HTMLDialogElement>(null);
    
    const dialogOnClick = (e: React.MouseEvent) => {
        if (e.target === dialogRef.current) {
            const rect = (e.target as HTMLDialogElement).getBoundingClientRect();
            if (e.clientY < rect.top || e.clientY > rect.bottom) return dialogRef.current?.close();
            if (e.clientX < rect.left || e.clientX > rect.right) return dialogRef.current?.close();
        }
    }

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    return (
        <>
            <button onClick={openDialog} className={styles.open_button}>
                Character Filter
            </button>
            <dialog 
                className={styles.dialog} 
                ref={dialogRef} 
                onClick={dialogOnClick}
            >
                <div className={styles.dialog_content}>
                    <CharacterFilter 
                        selectedCharacters={selectedCharacters} 
                        setSelectedCharacters={setSelectedCharacters} 
                    />
                    <button 
                        onClick={() => dialogRef.current?.close()}
                        className={styles.close_button}
                    >
                        Close
                    </button>
                </div>
            </dialog>
        </>
    );
};

export default CharacterFilterDialog;