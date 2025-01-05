import React from "react";
import Image from "next/image";
import styles from "./CharacterBuildIcon.module.css";
import { BuildSpecificSet, Character, characterIcons } from "../lib/data";

interface CharacterBuildIconProps {
    character: Character;
    builds: BuildSpecificSet[];
}

const CharacterBuildIcon: React.FC<CharacterBuildIconProps> = ({ character, builds }) => {
    builds = builds.filter((build, i) => builds.findIndex(b => b.infographic === build.infographic) === i);

    const dialogRef = React.useRef<HTMLDialogElement>(null);

    const dialogOnClick = (e: React.MouseEvent) => {
        if (e.target === dialogRef.current) {
            let rect = (e.target as HTMLDialogElement).getBoundingClientRect();
            if (e.clientY < rect.top || e.clientY > rect.bottom) return dialogRef.current?.close();
            if (e.clientX < rect.left || e.clientX > rect.right) return dialogRef.current?.close();
        }
    }

    return <>
        <Image src={characterIcons[character]} alt={character} width={64} height={64}
            onClick={() => dialogRef.current?.showModal()}
        />
        <dialog className={styles.character_build_popup} ref={dialogRef} onClick={dialogOnClick}>
            {builds.filter(b => b.infographic != "").map((build, i) => (
                <Image key={i} src={build.infographic} alt={build.playstyle} width={1150} height={920} />
            ))}
        </dialog>
    </>
}

export default CharacterBuildIcon;
