import { Builds } from "./_builds";

// TODO: remove Partial once we have all characters
export const builds: Partial<Builds> = {
    Albedo: [
        {
            playstyle: "Off-Field DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Albedo-Infographic-4.5.png",
            sets: [
                {
                    name: "Husk Of Opulent Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Husk Of Opulent Dreams",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Golden Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Archaic Petra",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["DEF%"],
                goblet: ["Geo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "DEF%", "ATK%"]
        }
    ],
    Alhaitham: [
        {
            playstyle: "On-Field DPS",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Alhaitham-Infographic-4.4.png",
            sets: [
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Deepwood Memories",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 2,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%"],
                goblet: ["Dendro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "EM", "CRIT"]
        }
    ],
    Aloy: [
        {
            playstyle: "On-Field Freeze DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Aloy-Freeze-Infographic-4.5.png",
            sets: [
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 0,
                }
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        },
        {
            playstyle: "Quickswap Melt DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Aloy-Melt-Infographic-4.5.png",
            sets: [
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM", "ER"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        },
        {
            playstyle: "Off-Field Support",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Aloy-Support-Infographic-4.5.png",
            sets: [
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        }
    ],
    Amber: [
        {
            playstyle: "Burgeon Trigger",
            patch: "3.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/08/Amber_Burgeon_1.png",
            sets: [
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["EM"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["EM"]
        },
        {
            playstyle: "Melt Bunny Bomber DPS (C4+)",
            patch: "3.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/08/Amber_C4_Melt_1.png",
            sets: [
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "EM", "ATK%"]
        },
        {
            playstyle: "Melt Charged Shot DPS",
            patch: "3.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/08/Amber_Melt_1.png",
            sets: [
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["CRIT", "EM", "ATK%"]
        }
    ],
    "Anemo Traveler": [
        {
            playstyle: "Quickswap DPS / Support",
            patch: "2.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/11/AMC-min.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Viridescent Venerer",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%"],
                goblet: ["EM", "Anemo%"],
                circlet: ["EM", "CRIT"]
            },
            subStats: ["ER", "EM", "ATK%"]
        }
    ],
    Arlecchino: [
        {
            playstyle: "On-Field DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Arlecchino-Infographic-4.6-Updated.png",
            sets: [
                {
                    name: "Fragment Of Harmonic Whimsy",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Echoes Of An Offering",
                    pieces: 4,
                    priority: 2,
                    comment: "<100 Ping"
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["CRIT", "ATK%", "EM"]
        }
    ],
    "Kamisato Ayaka": [
        {
            playstyle: "On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Ayaka_5.0_-_angtahimik__cote.png",
            sets: [
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Cryo%"],
                circlet: ["CDMG", "ATK%"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        }
    ],
    "Kamisato Ayato": [
        {
            playstyle: "On-Field DPS and Enabler",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Ayato_4.8_-_ang_tahimik__cote.png",
            sets: [
                {
                    name: "Heart Of Depth",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Nymph's Dream",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Echoes Of An Offering",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["ATK%", "ER"],
                goblet: ["Hydro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "HP%"]
        }
    ],
    Baizhu: [
        {
            playstyle: "Healer | Support",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Baizhu-Infographic-4.6.png",
            sets: [
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%", "ER"],
                goblet: ["HP%"],
                circlet: ["HP%", "Heal%"]
            },
            subStats: ["ER", "HP%", "CRate"]
        }
    ],
    Barbara: [
        {
            playstyle: "Healer | Bloom Driver",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Barbara-Infographic-5.2.png",
            sets: [
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%", "EM"],
                goblet: ["HP%", "EM"],
                circlet: ["Heal%", "HP%", "CRate"]
            },
            subStats: ["HP%", "CRate", "EM"]
        }
    ],
    Beidou: [
        {
            playstyle: "Off-Field DPS",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Beidou_4.8_-_kol-1.png",
            sets: [
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Thundersoother",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Thundering Fury",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%", "ER"],
                goblet: ["Electro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        }
    ],
    Charlotte: [
        {
            playstyle: "Healer",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/12/Charlotte_5.0_-_Lapsy__cote.png",
            sets: [
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Song Of Days Past",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%"],
                goblet: ["ATK%"],
                circlet: ["Heal%", "CRate"]
            },
            subStats: ["ER", "CRate", "ATK%"]
        }
    ],
    Chasca: [
        {
            playstyle: "On-Field DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Chasca-Infographic.png",
            sets: [
                {
                    name: "Obsidian Codex",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 1,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["ATK%"],
                circlet: ["CRIT"]
            },
            subStats: ["CRIT", "ATK%", "EM"]
        }
    ],
    Chevreuse: [
        {
            playstyle: "Support and Quickswap DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/09/Chevreuse_Support__Quickswap_DPS_5.0_-_cote.png",
            sets: [
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 3,
                },
            ],
            mainStats: {
                sands: ["ATK%", "ER"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "HP%"]
        },
        {
            playstyle: "Support",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/09/Chevreuse_Support_5.0_-_cote.png",
            sets: [
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Song Of Days Past",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["HP%", "ER"],
                goblet: ["HP%"],
                circlet: ["HP%", "Heal%"]
            },
            subStats: ["ER", "HP%", "CRate"]
        }
    ],
    Chiori: [
        {
            playstyle: "Off-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Chiori-Infographic-1.png",
            sets: [
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Husk Of Opulent Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Golden Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Husk Of Opulent Dreams",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Archaic Petra",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["DEF%"],
                goblet: ["Geo%", "DEF%"],
                circlet: ["CRIT", "DEF%"]
            },
            subStats: ["CRIT", "DEF%", "ATK%"]
        }
    ],
    Chongyun: [
        {
            playstyle: "Quickswap Support",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Chongyun_5.0_-_cote.png",
            sets: [
                {
                    name: "Unfinished Reverie",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        }
    ],
    Clorinde: [
        {
            playstyle: "On-Field DPS",
            patch: "4.7",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/06/Clorinde-Infographic-4.7-Updated.png",
            sets: [
                {
                    name: "Fragment Of Harmonic Whimsy",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Thundering Fury",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Electro%"],
                circlet: ["CRIT"]
            },
            subStats: ["CRIT", "ATK%", "EM"]
        }
    ],
    Cyno: [
        {
            playstyle: "On-Field DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/05/Cyno-Infographic-4.6.png",
            sets: [
                {
                    name: "Thundering Fury",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 4,
                    priority: 3,
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%", "ER"],
                goblet: ["Electro%", "EM"],
                circlet: ["CRIT", "EM"]
            },
            subStats: ["ER", "CRIT", "EM", "ATK%"]
        }
    ],
    Dehya: [
        {
            playstyle: "Off-Field Burgeon Trigger",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Dehya-Burgeon-Infographic-4.5.png",
            sets: [
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["EM"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["EM", "HP%"]
        },
        {
            playstyle: "On-Field DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Dehya-On-Field-DPS-Infographic-4.5.png",
            sets: [
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 1,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["ATK%", "HP%", "ER"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "HP%", "EM"]
        },
        {
            playstyle: "Off-Field Support",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Dehya-Support-Infographic-4.5.png",
            sets: [
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%"],
                goblet: ["HP%"],
                circlet: ["HP%", "CRate"]
            },
            subStats: ["CRate", "HP%"]
        }
    ],
    Diluc: [
        {
            playstyle: "On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/12/Diluc_5.0_-_cote.png",
            sets: [
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 2,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "EM", "ATK%"]
        }
    ],
    Dori: [
        {
            playstyle: "On-Field DPS (C6)",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Dori-On-Field-DPS-Infographic.png",
            sets: [
                {
                    name: "Thundering Fury",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Thundering Fury",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 2,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["EM", "ER"],
                goblet: ["Electro%", "EM"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "EM", "ATK%"]
        },
        {
            playstyle: "Hyperbloom Trigger",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Dori-Hyperbloom-Infographic.png",
            sets: [
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["EM", "ER"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["ER", "EM", "CRate", "HP%"]
        },
        {
            playstyle: "Off-Field Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Dori-Support-Infographic.png",
            sets: [
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%"],
                goblet: ["HP%"],
                circlet: ["HP%"]
            },
            subStats: ["ER", "HP%"]
        }
    ],
    Emilie: [
        {
            playstyle: "Off-Field DPS",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/08/Emilie_4.8_-_cote.png",
            sets: [
                {
                    name: "Unfinished Reverie",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Dendro%"],
                circlet: ["CRIT"]
            },
            subStats: ["CRIT", "ATK%", "ER"]
        }
    ],
    Eula: [
        {
            playstyle: "On-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Eula-Infographic.png",
            sets: [
                {
                    name: "Pale Flame",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Pale Flame",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 2,
                    comment: "With Furina"
                },
                {
                    name: "Vermillion Hereafter",
                    pieces: 4,
                    priority: 3,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Physical%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        }
    ],
    Faruzan: [
        {
            playstyle: "Off-Field Support",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Faruzan_5.0_-_kol.png",
            sets: [
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ER"],
                goblet: ["Anemo%"],
                circlet: ["CRate"]
            },
            subStats: ["ER", "CRate"]
        }
    ],
    Fischl: [
        {
            playstyle: "Off-Field DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/12/Fischl-Infographic-5.2.png",
            sets: [
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Electro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        }
    ],
    Freminet: [
        {
            playstyle: "Cryo On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Freminet_Cryo_5.0_-_cote.png",
            sets: [
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%", "ER"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        },
        {
            playstyle: "Physical On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Freminet_Physical_5.0_-_cote.png",
            sets: [
                {
                    name: "Pale Flame",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Pale Flame",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Physical%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        }
    ],
    Furina: [
        {
            playstyle: "Off-Field DPS and Buffer",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Furina_5.1_-_euphorysm__cote.png",
            sets: [
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%", "ER"],
                goblet: ["HP%", "Hydro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "HP%"]
        }
    ],
    Gaming: [
        {
            playstyle: "Plunging Attack DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Gaming-Infographic-5.2.png",
            sets: [
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "EM", "ATK%"]
        }
    ],
    Ganyu: [
        {
            playstyle: "Freeze & Mono Cryo DPS",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/03/Ganyu-Freeze-Infographic-4.4.png",
            sets: [
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Cryo%"],
                circlet: ["CDMG", "ATK%"]
            },
            subStats: ["ER", "CDMG", "ATK%", "CRate"]
        },
        {
            playstyle: "On-Field Melt DPS",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/03/Ganyu-Melt-Infographic-4.4.png",
            sets: [
                {
                    name: "Wanderer's Troupe",
                    pieces: 4,
                    priority: 0,
                    comment: "Strongbox"
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["EM", "CRIT", "EM", "ATK%"]
        }
    ],
    Heizou: [
        {
            playstyle: "On-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Heizou-DPS-Infographic-5.1.png",
            sets: [
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Viridescent Venerer",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Golden Troupe",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Desert Pavilion Chronicle",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 2,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 3,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Anemo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        },
        {
            playstyle: "On-Field Driver",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Heizou-Driver-Infographic-5.1.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["EM"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["ER", "EM"]
        },
        {
            playstyle: "Off-Field Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Heizou-Support-Infographic-5.1.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%", "EM"],
                goblet: ["Anemo%", "EM"],
                circlet: ["CRIT", "EM"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        }
    ],
    "Hu Tao": [
        {
            playstyle: "On-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/01/Hu_Tao_5.1_-_icedsquid.png",
            sets: [
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 2,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["HP%", "EM"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["EM", "CRIT", "HP%"]
        }
    ],
    "Hydro Traveler": [
        {
            playstyle: "Off-Field Support",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/08/Hydro_Traveler_4.8_-_euphorysm.png",
            sets: [
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%"],
                goblet: ["Hydro%"],
                circlet: ["CRate", "CDMG"]
            },
            subStats: ["ER", "CRate", "CDMG", "ATK%"]
        }
    ],
    "Arataki Itto": [
        {
            playstyle: "On-Field DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Itto-Infographic-4.5.png",
            sets: [
                {
                    name: "Husk Of Opulent Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Husk Of Opulent Dreams",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Archaic Petra",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["DEF%"],
                goblet: ["Geo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "DEF%", "ATK%"]
        }
    ],
    Jean: [
        {
            playstyle: "Off-Field Sunfire",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Jean-Sunfire-Infographic.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["EM", "ER"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["ER", "EM", "CRate"]
        },
        {
            playstyle: "Off-Field Healer | Support",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Jean-Support-Infographic-4.4.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%"],
                goblet: ["ATK%", "Anemo%"],
                circlet: ["Heal%", "CRate"]
            },
            subStats: ["ER", "ATK%", "CRate", "EM"]
        }
    ],
    Kachina: [
        {
            playstyle: "Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Kachina-Infographic-5.1.png",
            sets: [
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["DEF%", "ER"],
                goblet: ["Geo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "DEF%"]
        }
    ],
    Kaeya: [
        {
            playstyle: "Quickswap DPS - Freeze",
            patch: "3.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/11/Kaeya_1.png",
            sets: [
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "ATK%", "CRIT"]
        },
        {
            playstyle: "Quickswap DPS - Reverse Melt",
            patch: "3.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/11/Kaeya_1.png",
            sets: [
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Lavawalker",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM", "ER"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        }
    ],
    Kaveh: [
        {
            playstyle: "On-Field Driver",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Kaveh_5.0_-_cote.png",
            sets: [
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ER", "ER"],
                goblet: ["EM"],
                circlet: ["EM", "CRate", "Heal%"]
            },
            subStats: ["ER", "CRate", "EM"]
        }
    ],
    "Kaedehara Kazuha": [
        {
            playstyle: "Support",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Kazuha_5.0_-_cote.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["EM", "ER"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["ER", "EM", "CRate"]
        }
    ],
    Keqing: [
        {
            playstyle: "On-Field Electro DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Keqing-Infographic-4.5.png",
            sets: [
                {
                    name: "Thundering Fury",
                    pieces: 4,
                    priority: 0,
                    comment: "With Dendro"
                },
                {
                    name: "Thundering Fury",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 2,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Electro%"],
                circlet: ["CRIT"]
            },
            subStats: ["CRIT", "ATK%"]
        }
    ],
    Kinich: [
        {
            playstyle: "On-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Kinich-Infographic-5.1.png",
            sets: [
                {
                    name: "Obsidian Codex",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Unfinished Reverie",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Dendro%"],
                circlet: ["CRIT"]
            },
            subStats: ["CRIT", "ATK%", "ER"]
        }
    ],
    Kirara: [
        {
            playstyle: "Shielder | Support | Driver",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Kirara_4.8_-_cote.png",
            sets: [
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%", "ER"],
                goblet: ["HP%"],
                circlet: ["HP%", "CRate"]
            },
            subStats: ["ER", "HP%", "CRate"]
        }
    ],
    Klee: [
        {
            playstyle: "On-Field Burgeon Trigger",
            patch: "4.7",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/07/Klee_Burgeon_4.7_-_ang_tahimik.png",
            sets: [
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["EM"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["EM"]
        },
        {
            playstyle: "On-Field DPS",
            patch: "4.7",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/07/Klee_On-field_4.7_-_ang_tahimik.png",
            sets: [
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        }
    ],
    "Sangonomiya Kokomi": [
        {
            playstyle: "Nilou Bloom Driver & Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Kokomi-Bloom-Infographic.png",
            sets: [
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["EM", "HP%", "ER"],
                goblet: ["EM", "Hydro%"],
                circlet: ["EM", "Heal%"]
            },
            subStats: ["ER", "HP%", "EM"]
        },
        {
            playstyle: "Off-Field Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Kokomi-Support-Infographic-5.1.png",
            sets: [
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%"],
                goblet: ["HP%"],
                circlet: ["Heal%", "HP%"]
            },
            subStats: ["HP%"]
        },
        {
            playstyle: "On-Field Driver",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Kokomi-Driver-Infographic-5.1.png",
            sets: [
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%", "ER"],
                goblet: ["Hydro%"],
                circlet: ["Heal%"]
            },
            subStats: ["ER", "HP%", "ATK%"]
        }
    ],
    Layla: [
        {
            playstyle: "Off-Field DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/12/Layla-Off-Field-DPS-Infog-5.2.png",
            sets: [
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 2,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 3,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 3,
                },
            ],
            mainStats: {
                sands: ["HP%", "ER"],
                goblet: ["Cryo%"],
                circlet: ["CRIT", "HP%"]
            },
            subStats: ["ER", "CRIT", "HP%"]
        },
        {
            playstyle: "Shielder",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/12/Layla-Shielder-Infog-5.2.png",
            sets: [
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["HP%", "ER"],
                goblet: ["HP%"],
                circlet: ["HP%", "CRate"]
            },
            subStats: ["ER", "CRate", "HP%"]
        }
    ],
    Lisa: [
        {
            playstyle: "Support | Off-Field DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/10/Lisa_Off-Field_4.6_-_kol.png",
            sets: [
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                    comment: "Support"
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Thundering Fury",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%", "EM"],
                goblet: ["Electro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        },
        {
            playstyle: "On-Field DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/10/Lisa_On-Field_4.6_-_kol.png",
            sets: [
                {
                    name: "Thundering Fury",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Thundering Fury",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Electro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        }
    ],
    Lynette: [
        {
            playstyle: "On-Field DPS (C6)",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Lynette_On-Field_C6_DPS_5.0_-_euphorysm__cote.png",
            sets: [
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                    comment: "Damage"
                },
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                    comment: "Support"
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Anemo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        },
        {
            playstyle: "Support | Reaction DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Lynette_Support_and_Reaction_DPS_5.0_-_euphorysm__cote.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ER", "EM"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["ER", "EM", "CRate"]
        },
        {
            playstyle: "Off-Field Support | DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Lynette_Off-Field_Support_and_DPS_5.0_-_euphorysm__cote.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                    comment: "With Xiao"
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                    comment: "Damage"
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%"],
                goblet: ["Anemo%", "ATK%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        }
    ],
    Lyney: [
        {
            playstyle: "On-Field DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Lyney-Infographic-5.2.png",
            sets: [
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Crimson Witch Of Flames",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Pyro%"],
                circlet: ["CRIT"]
            },
            subStats: ["CRIT", "ATK%", "EM", "ER"]
        }
    ],
    Mona: [
        {
            playstyle: "Support",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/03/Mona-Infographic-4.5.png",
            sets: [
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ER"],
                goblet: ["Hydro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRate", "CDMG"]
        }
    ],
    Mualani: [
        {
            playstyle: "On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Mualani_5.0_-_Squid__cote.png",
            sets: [
                {
                    name: "Obsidian Codex",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%", "EM"],
                goblet: ["Hydro%", "HP%"],
                circlet: ["CRIT", "HP%"]
            },
            subStats: ["CRIT", "HP%", "EM", "ER"]
        }
    ],
    Nahida: [
        {
            playstyle: "Support | Off-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Nahida-Infographic.png",
            sets: [
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Scroll Of The Hero Of Cinder City",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["EM"],
                goblet: ["EM", "Dendro%"],
                circlet: ["EM", "CRIT"]
            },
            subStats: ["ER", "EM", "CRIT", "ATK%"]
        }
    ],
    Navia: [
        {
            playstyle: "On-Field DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/12/Navia_4.6_update_-_euphorysm.png",
            sets: [
                {
                    name: "Nighttime Whispers In The Echoing Woods",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Golden Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Archaic Petra",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%", "ER"],
                goblet: ["Geo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        }
    ],
    Neuvilette: [
        {
            playstyle: "On-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Neuvillette-Infographic-5.1.png",
            sets: [
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["HP%"],
                goblet: ["Hydro%", "HP%"],
                circlet: ["CRIT", "HP%"]
            },
            subStats: ["ER", "CRIT", "HP%", "EM"]
        }
    ],
    Nilou: [
        {
            playstyle: "Off-Field Bloom Support",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Nilou_4.8_-_kol__cote.png",
            sets: [
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Tenacity Of The Millelith",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["HP%"],
                goblet: ["HP%"],
                circlet: ["HP%"]
            },
            subStats: ["HP%", "EM"]
        }
    ],
    Ningguang: [
        {
            playstyle: "On-Field | Quickswap DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Ningguang-Infographic-5.2.png",
            sets: [
                {
                    name: "Nighttime Whispers In The Echoing Woods",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Archaic Petra",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Geo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        }
    ],
    Noelle: [
        {
            playstyle: "On-Field DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Noelle-Infographic-4.5.png",
            sets: [
                {
                    name: "Archaic Petra",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 1,
                    comment: "With Furina"
                },
                {
                    name: "Husk Of Opulent Dreams",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["DEF%"],
                goblet: ["Geo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "DEF%", "ATK%"]
        }
    ],
    Qiqi: [
        {
            playstyle: "On-Field Driver | Healer",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Qiqi-Infographic-4.4.png",
            sets: [
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["ATK%", "Physical%"],
                circlet: ["Heal%", "CRIT"]
            },
            subStats: ["ATK%", "CRIT", "ER"]
        }
    ],
    "Raiden Shogun": [
        {
            playstyle: "On-Field Aggrevate DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Raiden_Shogun_Aggravate_5.0_-_euphorysm__squid.png",
            sets: [
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "",
                    pieces: 4,
                    priority: 1,
                    comment: "With Furina"
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%", "EM"],
                goblet: ["Electro%", "ATK%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%", "EM"]
        },
        {
            playstyle: "Off-Field Hyperbloom Trigger",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Raiden_Shogun_Hyperbloom_5.0_-_euphorysm_og__cegewinne_update.png",
            sets: [
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 2,
                },

            ],
            mainStats: {
                sands: ["EM"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["EM", "CRate"]
        },
        {
            playstyle: "On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Raiden_Shogun_On-Field_DPS_5.0_-_euphorysm-1.png",
            sets: [
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ATK%", "ER"],
                goblet: ["Electro%", "ATK%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        }
    ],
    Razor: [
        {
            playstyle: "On-Field Aggravate DPS",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Razor-Aggravate-Infographic-4.4.png",
            sets: [
                {
                    name: "Thundering Fury",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Thundersoother",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Pale Flame",
                    pieces: 4,
                    priority: 2,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: ["ATK%", "EM"],
                goblet: ["Electro%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "EM", "ATK%"]
        },
        {
            playstyle: "On-Field Physical DPS",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Razor-Physical-Infographic-4.4.png",
            sets: [
                {
                    name: "Pale Flame",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Thundersoother",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 2,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: ["ATK%"],
                goblet: ["Physical%", "ATK%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", 'ATK%']
        },
        {
            playstyle: "Transformative Reaction DPS",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Razor-Transformative-Infographic-4.4.png",
            sets: [
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Flower Of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 2,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["EM", "ER"],
                goblet: ["EM"],
                circlet: ["EM"]
            },
            subStats: ["ER", "EM", "CRate"]
        }
    ],
    Rosaria: [
        {
            playstyle: "Freeze DPS | Support",
            patch: "4.3",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Rosaria-Freeze-Infographic-4.3.png",
            sets: [
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 0,
                    comment: "DPS"
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["ATK%", "ER"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "ATK%"]
        },
        {
            playstyle: "Reverse Melt DPS",
            patch: "4.3",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Rosaria-Reverse-Melt-Infographic-4.3.png",
            sets: [
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Lavawalker",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Emblem Of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%"],
                goblet: ["Cryo%"],
                circlet: ["CRIT"]
            },
            subStats: ["ER", "CRIT", "EM", "ATK%"]
        }
    ],
    Sayu: [
        {
            playstyle: "Off-Field Healer | Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Sayu-Off-Field-Infographic.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: ["ER", "ATK%", "EM"],
                goblet: ["ATK%", "EM"],
                circlet: ["Heal%", "EM", "CRIT"]
            },
            subStats: ["ER", "ATK%", "EM", "CRate"]
        },
        {
            playstyle: "On-Field Driver",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Sayu-On-Field-Infographic.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: ["EM", "ATK%"],
                goblet: ["EM", "Anemo%"],
                circlet: ["EM", "CRIT"]
            },
            subStats: ["ER", "EM", "CRIT", "ATK%"]
        }
    ],
}