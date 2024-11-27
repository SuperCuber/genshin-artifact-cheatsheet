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
    name: string;
    pieces: number;
    priority: number;
    comment?: string;
}

export type Stat = "ATK%" | "DEF%" | "HP%" | "Heal%" | "CRIT" | "CRate" | "CDMG" | "EM" | "ER" | "Anemo%" | "Cryo%" | "Dendro%" | "Electro%" | "Geo%" | "Hydro%" | "Pyro%" | "Physical%";

export const builds: { [character: string]: Build[] } = {
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
                    name: "Marechausse Hunter",
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
                    name: "Tenacity of the Millelith",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 0
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0
                },
                {
                    name: "Deepwood memories",
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
                    name: "Scroll of the Hero of Cinder City",
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
                    name: "Emblem of Severed Fate",
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
                    name: "Marechausse Hunter",
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
                    name: "Flower of Paradise Lost",
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
