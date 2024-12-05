import { artifactIcons, ArtifactSet, Character } from ".";

export type Build = {
    playstyle: string;
    infographic: string;
    patch: string;
    niche?: boolean;
    sets: BuildArtifactSet[];
    mainStats: {
        sands: Stat[];
        goblet: Stat[];
        circlet: Stat[];
    };
    subStats: Stat[];
}

export type BuildArtifactSet = {
    name: ArtifactSet;
    pieces: 2 | 4;
    priority: number;
    playrate: number;
    comment?: string;
}

export type BuildSpecificSet = Omit<Build, "sets"> & { set: BuildArtifactSet };

export type Stat = "ATK%" | "DEF%" | "HP%" | "Heal%" | "CRIT" | "CRate" | "CDMG" | "EM" | "ER" | "Anemo%" | "Cryo%" | "Dendro%" | "Electro%" | "Geo%" | "Hydro%" | "Pyro%" | "Physical%";

type Builds = { [character in Character]: Build[] };

type BuildsByArtifact = {
    [artifact in ArtifactSet]: {
        character: Character,
        build: BuildSpecificSet
    }[]
};

export function groupByArtifact(builds: Partial<Builds>): BuildsByArtifact {
    const result: BuildsByArtifact = {} as BuildsByArtifact;
    for (const artifactName in artifactIcons) {
        result[artifactName as ArtifactSet] = [];
    }

    for (const [character, charBuilds] of Object.entries(builds)) {
        for (const build of charBuilds) {
            for (const set of build.sets) {
                result[set.name].push({
                    character: character as Character,
                    build: {
                        ...build,
                        set: set
                    }
                });
            }
        }
    }
    return result;
}

// TODO: remove Partial once we have all characters
export const builds: Partial<Builds> = {
    
}
