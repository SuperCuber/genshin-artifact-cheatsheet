import { artifacts as artifactIcons, characters as characterIcons } from './_images'
import SandsIcon from "/public/icons/Sands.png";
import GobletIcon from "/public/icons/Goblet.png";
import CircletIcon from "/public/icons/Circlet.png";

export { artifactIcons, characterIcons };
export { SandsIcon, GobletIcon, CircletIcon };
export type Character = keyof typeof characterIcons
export type ArtifactSet = keyof typeof artifactIcons
export const allCharacters = Object.keys(characterIcons) as Character[];

export * from './_builds'
export * from './_buildData'
