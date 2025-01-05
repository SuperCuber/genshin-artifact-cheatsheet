import React from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
    textFilter: string;
    setTextFilter: (text: string | undefined) => void;
    inputRef: React.RefObject<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({ textFilter, setTextFilter, inputRef }) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            setTextFilter(undefined);
        }
    };

    return (
        <div className={styles.search_bar}>
            <input
                className={styles.search_field}
                ref={inputRef}
                type="search"
                value={textFilter}
                onChange={e => setTextFilter(e.target.value)}
                placeholder="Search Character/Artifact"
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => setTextFilter(undefined)}>X</button>
        </div>
    );
};

export default SearchBar;
