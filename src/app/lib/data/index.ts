import { artifacts as artifactIcons, characters as characterIcons } from './_images'
export { artifactIcons, characterIcons };
export type Character = keyof typeof characterIcons
export type ArtifactSet = keyof typeof artifactIcons

export * from './_builds'
