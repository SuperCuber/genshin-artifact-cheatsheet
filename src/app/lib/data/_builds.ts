import { artifactIcons, ArtifactSet, Character } from ".";

export type Build = {
    playstyle: string;
    infographic: string;
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
    Keqing: [
        {
            playstyle: "On-Field Aggrevate DPS",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Keqing-Infographic-4.5.png",
            sets: [
                {
                    name: "Thundering Fury",
                    pieces: 4,
                    priority: 0,
                    comment: "with Dendro",
                },
                {
                    name: "Thundering Fury",
                    pieces: 2,
                    priority: 1
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 2,
                    comment: "with Furina"
                }
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Electro%"],
                circlet: ["CRIT"]
            },
            subStats: [
                "CRIT",
                "ATK%",
                "EM"
            ]
        }
    ],
    Dori: [
        {
            playstyle: "Support",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Dori-Support-Infographic.png",
            sets: [
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0
                },
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                    comment: "Quicken"
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                    comment: "Quicken"
                },
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 0,
                    comment: "Quicken"
                }
            ],
            mainStats: {
                sands: ["HP%"],
                goblet: ["HP%"],
                circlet: ["Heal%"]
            },
            subStats: [
                "ER",
                "HP%"
            ]
        },
        {
            playstyle: "C6 On-Field DPS",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Dori-On-Field-DPS-Infographic.png",
            sets: [
                {
                    name: "Thundering Fury",
                    pieces: 4,
                    priority: 0
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Thundering Fury",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 1,
                    comment: "with Furina"
                }
            ],
            mainStats: {
                sands: ["EM", "ER"],
                goblet: ["Electro%", "EM"],
                circlet: ["CRIT"]
            },
            subStats: [
                "ER",
                "CRIT",
                "EM",
                "ATK%"
            ]
        },
        {
            playstyle: "Hyperbloom Trigger",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Dori-Hyperbloom-Infographic.png",
            sets: [
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1
                },
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 2
                }
            ],
            mainStats: {
                sands: ["EM", "ER"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: [
                "ER",
                "EM",
                "CRate",
                "HP%"
            ]
        }
    ]
}
