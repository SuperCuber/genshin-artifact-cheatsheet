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
    primaryStat: StatName;
    erRequirement: {
        comment?: string;
        min: number;
        max: number;
        reduction?: boolean;
    }[];
    subStats: Stat[];
}

// TODO: remove
export type BuildOld = {
    playstyle: string;
    infographic: string;
    patch: string;
    niche?: boolean;
    sets: BuildArtifactSet[];
    mainStats: {
        sands: Stat[] | StatName[];
        goblet: Stat[] | StatName[];
        circlet: Stat[] | StatName[];
    };
    primaryStat?: StatName;
    erRequirement?: {
        comment?: string;
        min: number;
        max: number;
        reduction?: boolean;
    }[];
    subStats: StatName[];
}

export type BuildArtifactSet = {
    name: ArtifactSet;
    pieces: 2 | 4;
    priority: number;
    playrate?: number;
    comment?: string;
}

export type BuildSpecificSet = Omit<Build, "sets"> & { set: BuildArtifactSet };

export type Stat = {
    name: StatName;
    priority: number;
    comment?: string;
    min?: number;
    max?: number;
}

export const elements = ["Pyro%", "Hydro%", "Electro%", "Cryo%", "Anemo%", "Geo%", "Dendro%", "Physical%"] as const;
export const realStatNames = ["CRate", "CDMG", "Heal%", "ATK%", "HP%", "DEF%", "EM", "ER", ...elements] as const
export const statNames = ["Any", "CRIT", "Element%", ...realStatNames] as const;
export const statOrder = Object.fromEntries(statNames.map((name, i) => [name, i])) as Record<StatName, number>;
export type StatName = typeof statNames[number];

export type Builds = Record<Character, Build[]>;

export type BuildsByArtifact = Record<ArtifactSet, {
    character: Character,
    build: BuildSpecificSet
}[]>

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

