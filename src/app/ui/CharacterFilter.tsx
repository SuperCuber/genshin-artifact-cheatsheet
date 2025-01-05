
import React, { useEffect } from "react";
import styles from "./CharacterFilter.module.css";
import { Character, allCharacters } from "../lib/data";
import CharacterFilterIcon from "./CharacterFilterIcon";

interface CharacterFilterProps {
    selectedCharacters: Character[];
    setSelectedCharacters: (characters: Character[]) => void;
}

const CharacterFilter: React.FC<CharacterFilterProps> = ({ selectedCharacters, setSelectedCharacters }) => {
    const [search, setSearch] = React.useState("");
    const [shownCharacters, setShownCharacters] = React.useState(allCharacters);

    const toggleCharacter = (character: Character) => {
        setSelectedCharacters(selectedCharacters.includes(character)
            ? selectedCharacters.filter(c => c !== character)
            : [...selectedCharacters, character]);
    };

    useEffect(() => {
        if (search) {
            setShownCharacters(allCharacters.filter(c => c.toLowerCase().includes(search.toLowerCase())));
        } else {
            setShownCharacters(allCharacters);
        }
    }, [search]);

    return (
        <div className={styles.character_filter}>
            <div className={styles.top_row}>
                <input
                    type="search"
                    placeholder="Search Character..."
                    className={styles.character_filter_search}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button onClick={() => setSelectedCharacters(allCharacters)}>Select All</button>
                <button onClick={() => setSelectedCharacters([])}>Clear All</button>
            </div>
            <div className={styles.character_filter_icons}>
                {shownCharacters.map(character =>
                    <CharacterFilterIcon
                        key={character}
                        character={character as Character}
                        selected={selectedCharacters.includes(character)}
                        onClick={() => toggleCharacter(character)}
                    />)}
            </div>
        </div >)
}

export default CharacterFilter;
