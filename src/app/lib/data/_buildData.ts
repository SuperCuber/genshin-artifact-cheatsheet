import { Character } from ".";
import { Build, } from "./_builds";

// TODO: remove Partial once we have all characters
export const builds: Partial<Record<Character, Build[]>> = {
    Albedo: [
        {
            playstyle: "Off-Field DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Albedo-Infographic-4.5.png",
            sets: [
                {
                    name: "Husk of Opulent Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Husk of Opulent Dreams",
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
                sands: [{name:"DEF%", priority:0}],
                goblet: [{name:"Geo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"DEF%", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Dendro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRIT", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        },
        {
            playstyle: "Quickswap Melt DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Aloy-Melt-Infographic-4.5.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Amber: [
        {
            playstyle: "Burgeon Trigger",
            patch: "3.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/08/Amber_Burgeon_1.png",
            sets: [
                {
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"EM", priority:0}]
        },
        {
            playstyle: "Melt Bunny Bomber DPS (C4+)",
            patch: "3.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/08/Amber_C4_Melt_1.png",
            sets: [
                {
                    name: "Crimson Witch of Flames",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Crimson Witch of Flames",
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Crimson Witch of Flames",
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"EM", priority:0}, {name:"Anemo%", priority:0}],
                circlet: [{name:"EM", priority:0}, {name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Arlecchino: [
        {
            playstyle: "On-Field DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Arlecchino-Infographic-4.6-Updated.png",
            sets: [
                {
                    name: "Fragment of Harmonic Whimsy",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Echoes of an Offering",
                    pieces: 4,
                    priority: 2,
                    comment: "<100 Ping"
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CDMG", priority:0}, {name:"ATK%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    "Kamisato Ayato": [
        {
            playstyle: "On-Field DPS and Enabler",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Ayato_4.8_-_ang_tahimik__cote.png",
            sets: [
                {
                    name: "Heart of Depth",
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
                    name: "Echoes of an Offering",
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
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Hydro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"HP%", priority:0}]
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
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"Heal%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}, {name:"CRate", priority:0}]
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
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"HP%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"HP%", priority:0}, {name:"EM", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"HP%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"HP%", priority:0}, {name:"CRate", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Beidou: [
        {
            playstyle: "Off-Field DPS",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Beidou_4.8_-_kol-1.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Thundersoother",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Song of Days Past",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"ATK%", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"ATK%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Chevreuse: [
        {
            playstyle: "Support and Quickswap DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/09/Chevreuse_Support__Quickswap_DPS_5.0_-_cote.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
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
                    name: "Crimson Witch of Flames",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 3,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"HP%", priority:0}]
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
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Song of Days Past",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"Heal%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}, {name:"CRate", priority:0}]
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
                    name: "Husk of Opulent Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Golden Troupe",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Husk of Opulent Dreams",
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
                sands: [{name:"DEF%", priority:0}],
                goblet: [{name:"Geo%", priority:0}, {name:"DEF%", priority:0}],
                circlet: [{name:"CRIT", priority:0}, {name:"DEF%", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"DEF%", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Emblem of Severed Fate",
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
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Clorinde: [
        {
            playstyle: "On-Field DPS",
            patch: "4.7",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/06/Clorinde-Infographic-4.7-Updated.png",
            sets: [
                {
                    name: "Fragment of Harmonic Whimsy",
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Electro%", priority:0}, {name:"EM", priority:0}],
                circlet: [{name:"CRIT", priority:0}, {name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Flower of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"EM", priority:0}, {name:"HP%", priority:0}]
        },
        {
            playstyle: "On-Field DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Dehya-On-Field-DPS-Infographic-4.5.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"HP%", priority:0}, {name:"EM", priority:0}]
        },
        {
            playstyle: "Off-Field Support",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Dehya-Support-Infographic-4.5.png",
            sets: [
                {
                    name: "Tenacity of the Millelith",
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
                sands: [{name:"HP%", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"CRate", priority:0}, {name:"HP%", priority:0}]
        }
    ],
    Diluc: [
        {
            playstyle: "On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/12/Diluc_5.0_-_cote.png",
            sets: [
                {
                    name: "Crimson Witch of Flames",
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Electro%", priority:0}, {name:"EM", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
        },
        {
            playstyle: "Hyperbloom Trigger",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Dori-Hyperbloom-Infographic.png",
            sets: [
                {
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRate", priority:0}, {name:"HP%", priority:0}]
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
                    name: "Tenacity of the Millelith",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Emblem of Severed Fate",
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
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Dendro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"ER", priority:0}]
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
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Physical%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Faruzan: [
        {
            playstyle: "Off-Field Support",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Faruzan_5.0_-_kol.png",
            sets: [
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ER", priority:0}],
                goblet: [{name:"Anemo%", priority:0}],
                circlet: [{name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}]
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Physical%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}, {name:"Hydro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"HP%", priority:0}]
        }
    ],
    Gaming: [
        {
            playstyle: "Plunging Attack DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Gaming-Infographic-5.2.png",
            sets: [
                {
                    name: "Crimson Witch of Flames",
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CDMG", priority:0}, {name:"ATK%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CDMG", priority:0}, {name:"ATK%", priority:0}, {name:"CRate", priority:0}]
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"EM", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Anemo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Anemo%", priority:0}, {name:"EM", priority:0}],
                circlet: [{name:"CRIT", priority:0}, {name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    "Hu Tao": [
        {
            playstyle: "On-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/01/Hu_Tao_5.1_-_icedsquid.png",
            sets: [
                {
                    name: "Crimson Witch of Flames",
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
                sands: [{name:"HP%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"EM", priority:0}, {name:"CRIT", priority:0}, {name:"HP%", priority:0}]
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
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Hydro%", priority:0}],
                circlet: [{name:"CRate", priority:0}, {name:"CDMG", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"CDMG", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    "Arataki Itto": [
        {
            playstyle: "On-Field DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Itto-Infographic-4.5.png",
            sets: [
                {
                    name: "Husk of Opulent Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Husk of Opulent Dreams",
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
                sands: [{name:"DEF%", priority:0}],
                goblet: [{name:"Geo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"DEF%", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRate", priority:0}]
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
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"ATK%", priority:0}, {name:"Anemo%", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"CRate", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Kachina: [
        {
            playstyle: "Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Kachina-Infographic-5.1.png",
            sets: [
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"DEF%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Geo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"DEF%", priority:0}]
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
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"CRIT", priority:0}]
        },
        {
            playstyle: "Quickswap DPS - Reverse Melt",
            patch: "3.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/11/Kaeya_1.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"ER", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}, {name:"CRate", priority:0}, {name:"Heal%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRate", priority:0}]
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Dendro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"ER", priority:0}]
        }
    ],
    Kirara: [
        {
            playstyle: "Shielder | Support | Driver",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Kirara_4.8_-_cote.png",
            sets: [
                {
                    name: "Tenacity of the Millelith",
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
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}, {name:"CRate", priority:0}]
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
                    name: "Flower of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"EM", priority:0}]
        },
        {
            playstyle: "On-Field DPS",
            patch: "4.7",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/07/Klee_On-field_4.7_-_ang_tahimik.png",
            sets: [
                {
                    name: "Crimson Witch of Flames",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Crimson Witch of Flames",
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    "Sangonomiya Kokomi": [
        {
            playstyle: "Nilou Bloom Driver & Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Kokomi-Bloom-Infographic.png",
            sets: [
                {
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"EM", priority:0}, {name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"EM", priority:0}, {name:"Hydro%", priority:0}],
                circlet: [{name:"EM", priority:0}, {name:"Heal%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}, {name:"EM", priority:0}]
        },
        {
            playstyle: "Off-Field Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Kokomi-Support-Infographic-5.1.png",
            sets: [
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll of the Hero of Cinder City",
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
                sands: [{name:"HP%", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"HP%", priority:0}]
            },
            subStats: [{name:"HP%", priority:0}]
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
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Hydro%", priority:0}],
                circlet: [{name:"Heal%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 2,
                },
                {
                    name: "Blizzard Strayer",
                    pieces: 4,
                    priority: 3,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 3,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}, {name:"HP%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"HP%", priority:0}]
        },
        {
            playstyle: "Shielder",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/12/Layla-Shielder-Infog-5.2.png",
            sets: [
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"HP%", priority:0}]
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
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Anemo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                sands: [{name:"ER", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRate", priority:0}]
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
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 0,
                    comment: "Damage"
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Anemo%", priority:0}, {name:"ATK%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
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
                    name: "Crimson Witch of Flames",
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}, {name:"ER", priority:0}]
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
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}],
                goblet: [{name:"Hydro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"CDMG", priority:0}]
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
                sands: [{name:"HP%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Hydro%", priority:0}, {name:"HP%", priority:0}],
                circlet: [{name:"CRIT", priority:0}, {name:"HP%", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"HP%", priority:0}, {name:"EM", priority:0}, {name:"ER", priority:0}]
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
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}, {name:"Dendro%", priority:0}],
                circlet: [{name:"EM", priority:0}, {name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Navia: [
        {
            playstyle: "On-Field DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/12/Navia_4.6_update_-_euphorysm.png",
            sets: [
                {
                    name: "Nighttime Whispers in the Echoing Woods",
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
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Geo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"HP%", priority:0}],
                goblet: [{name:"Hydro%", priority:0}, {name:"HP%", priority:0}],
                circlet: [{name:"CRIT", priority:0}, {name:"HP%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"HP%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Nilou: [
        {
            playstyle: "Off-Field Bloom Support",
            patch: "4.8",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Nilou_4.8_-_kol__cote.png",
            sets: [
                {
                    name: "Tenacity of the Millelith",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Flower of Paradise Lost",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}]
            },
            subStats: [{name:"HP%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Ningguang: [
        {
            playstyle: "On-Field | Quickswap DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Ningguang-Infographic-5.2.png",
            sets: [
                {
                    name: "Nighttime Whispers in the Echoing Woods",
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
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Geo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Husk of Opulent Dreams",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"DEF%", priority:0}],
                goblet: [{name:"Geo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"DEF%", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"ATK%", priority:0}, {name:"Physical%", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"CRIT", priority:0}]
            },
            subStats: [{name:"ATK%", priority:0}, {name:"CRIT", priority:0}, {name:"ER", priority:0}]
        }
    ],
    "Raiden Shogun": [
        {
            playstyle: "On-Field Aggrevate DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Raiden_Shogun_Aggravate_5.0_-_euphorysm__squid.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
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
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}, {name:"ATK%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        },
        {
            playstyle: "Off-Field Hyperbloom Trigger",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Raiden_Shogun_Hyperbloom_5.0_-_euphorysm_og__cegewinne_update.png",
            sets: [
                {
                    name: "Flower of Paradise Lost",
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
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"EM", priority:0}, {name:"CRate", priority:0}]
        },
        {
            playstyle: "On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Raiden_Shogun_On-Field_DPS_5.0_-_euphorysm-1.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Electro%", priority:0}, {name:"ATK%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Physical%", priority:0}, {name:"ATK%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Flower of Paradise Lost",
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
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRate", priority:0}]
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
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
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
                    name: "Emblem of Severed Fate",
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
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
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"EM", priority:0}, {name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}, {name:"CRate", priority:0}]
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"EM", priority:0}, {name:"Anemo%", priority:0}],
                circlet: [{name:"EM", priority:0}, {name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Sethos: [
        {
            playstyle: "On-Field Aggravate DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Sethos-Infographic-5.1.png",
            sets: [
                {
                    name: "Wanderer's Troupe",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Desert Pavilion Chronicle",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 2,
                },
                {
                    name: "Wanderer's Troupe",
                    pieces: 2,
                    priority: 3,
                },
                {
                    name: "Thundering Fury",
                    pieces: 2,
                    priority: 3,
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 2,
                    priority: 3,
                },
            ],
            mainStats: {
                sands: [{name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    "Kuki Shinobu": [
        {
            playstyle: "Hyperbloom Trigger",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Shinobu-Hyperbloom-Infographic.png",
            sets: [
                {
                    name: "Flower of Paradise Lost",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Flower of Paradise Lost",
                    pieces: 2,
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
            ],
            mainStats: {
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"EM", priority:0}, {name:"ER", priority:0}, {name:"HP%", priority:0}]
        },
        {
            playstyle: "Quicken Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Shinobu-Quicken-Infographic.png",
            sets: [
                {
                    name: "Tenacity of the Millelith",
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
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}, {name:"EM", priority:0}, {name:"HP%", priority:0}],
                circlet: [{name:"CRIT", priority:0}, {name:"Heal%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"HP%", priority:0}]
        }
    ],
    Sigewinne: [
        {
            playstyle: "Healer",
            patch: "4.7",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/06/Sigewinne_4.7.png",
            sets: [
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Song of Days Past",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}, {name:"Hydro%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}, {name:"CRIT", priority:0}]
        }
    ],
    Sucrose: [
        {
            playstyle: "Support | Driver",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Sucrose-Infographic-5.2.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"EM", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Tartaglia: [
        {
            playstyle: "On-Field DPS | Enabler",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/03/Tartaglia-Infographic-4.4-Update.png",
            sets: [
                {
                    name: "Nymph's Dream",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Heart of Depth",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Nymph's Dream",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Heart of Depth",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Hydro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Thoma: [
        {
            playstyle: "Off-Field Burgeon DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/09/Thoma_Burgeon_5.0_-_cote__euphorysm.png",
            sets: [
                {
                    name: "Flower of Paradise Lost",
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
                sands: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"HP%", priority:0}],
                goblet: [{name:"EM", priority:0}, {name:"HP%", priority:0}],
                circlet: [{name:"EM", priority:0}, {name:"HP%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"HP%", priority:0}, {name:"CRate", priority:0}]
        },
        {
            playstyle: "Off-Field Support",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/09/Thoma_Support_5.0_-_cote__euphorysm.png",
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
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"HP%", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"HP%", priority:0}]
        }
    ],
    Tighnari: [
        {
            playstyle: "Quickswap DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/05/Tighnari-Infographic-4.6.png",
            sets: [
                {
                    name: "Wanderer's Troupe",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Deepwood Memories",
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
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Dendro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Venti: [
        {
            playstyle: "Off-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Venti_5.0_-_kol__cote.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"EM", priority:0}, {name:"Anemo%", priority:0}],
                circlet: [{name:"EM", priority:0}, {name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Wanderer: [
        {
            playstyle: "On-Field DPS",
            patch: "4.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/12/Wanderer_4.6_-_euphorysm__cote.png",
            sets: [
                {
                    name: "Desert Pavilion Chronicle",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Shimenawa's Reminiscence",
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Anemo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"ER", priority:0}]
        }
    ],
    Wriothesley: [
        {
            playstyle: "Freeze and Mono Cryo DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Wriothesely-Freeze-Mono-Cryo-Infog-5.2.png",
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
                    name: "Shimenawa's Reminiscence",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"ER", priority:0}]
        },
        {
            playstyle: "Melt DPS",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Wriothesley-Melt-Infographic-5.2.png",
            sets: [
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Unfinished Reverie",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 4,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Cryo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}, {name:"ER", priority:0}]
        }
    ],
    Xiangling: [
        {
            playstyle: "Off-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/03/Xiangling_5.0_-_Squid.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Crimson Witch of Flames",
                    pieces: 4,
                    priority: 1,
                    comment: "Vaporize"
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 1,
                    comment: "Vaporize"
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Xianyun: [
        {
            playstyle: "Plunging Attack Support",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/01/Xianyun-Infographic-4.4.png",
            sets: [
                {
                    name: "Viridescent Venerer",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Song of Days Past",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"ATK%", priority:0}],
                circlet: [{name:"ATK%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"CRate", priority:0}]
        }
    ],
    Xiao: [
        {
            playstyle: "On-Field DPS",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/03/Xiao-Infographic-4.4.png",
            sets: [
                {
                    name: "Vermillion Hereafter",
                    pieces: 4,
                    priority: 0,
                    comment: "Strongbox"
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                    comment: "Best to Farm"
                },
                {
                    name: "Viridescent Venerer",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Desert Pavilion Chronicle",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Shimenawa's Reminiscence",
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Anemo%", priority:0}, {name:"ATK%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Xilonen: [
        {
            playstyle: "Healer | Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Xilonen-Infographic.png",
            sets: [
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"DEF%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"DEF%", priority:0}],
                circlet: [{name:"DEF%", priority:0}, {name:"Heal%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"DEF%", priority:0}]
        }
    ],
    Xinyan: [
        {
            playstyle: "Physical DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Xinyan-Physical-DPS-Infographic-1.png",
            sets: [
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                    comment: "With Furina"
                },
                {
                    name: "Pale Flame",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Pale Flame",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Bloodstained Chivalry",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Emblem of Severed Fate",
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
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Husk of Opulent Dreams",
                    pieces: 2,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}, {name:"DEF%", priority:0}],
                goblet: [{name:"Physical%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"DEF%", priority:0}]
        },
        {
            playstyle: "Pyro DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Xinyan-Pyro-DPS-Infographic.png",
            sets: [
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                    comment: "With Furina"
                },
                {
                    name: "Lavawalker",
                    pieces: 4,
                    priority: 0,
                    comment: "Mono Pyro"
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Crimson Witch of Flames",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 2,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        },
        {
            playstyle: "Off-Field Shielder",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Xinyan-Shielder-Infographic.png",
            sets: [
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 2,
                },
                {
                    name: "Husk of Opulent Dreams",
                    pieces: 4,
                    priority: 3,
                },
            ],
            mainStats: {
                sands: [{name:"DEF%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"DEF%", priority:0}],
                circlet: [{name:"DEF%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"DEF%", priority:0}, {name:"CRate", priority:0}]
        }
    ],
    "Yae Miko": [
        {
            playstyle: "Off-Field DPS",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Yae-Infographic-4.4.png",
            sets: [
                {
                    name: "Golden Troupe",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
                    pieces: 4,
                    priority: 0,
                    comment: "Quicken"
                },
                {
                    name: "Emblem of Severed Fate",
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
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Yanfei: [
        {
            playstyle: "On-Field DPS",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Yanfei-Infographic-4.5.png",
            sets: [
                {
                    name: "Crimson Witch of Flames",
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
                sands: [{name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Yaoyao: [
        {
            playstyle: "Healer",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/12/Yaoyao_5.2_-_cote.png",
            sets: [
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"HP%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Yoimiya: [
        {
            playstyle: "On-Field DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Yoimiya_5.0_-_cote.png",
            sets: [
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Echoes of an Offering",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Crimson Witch of Flames",
                    pieces: 4,
                    priority: 0,
                    comment: "Vaporize"
                },
                {
                    name: "Marechaussee Hunter",
                    pieces: 4,
                    priority: 0,
                    comment: "With Furina"
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    "Yun Jin": [
        {
            playstyle: "Normal Attack Buffer",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Yun-Jin-Infographic-4.4.png",
            sets: [
                {
                    name: "Husk of Opulent Dreams",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Husk of Opulent Dreams",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Archaic Petra",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"DEF%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"DEF%", priority:0}],
                circlet: [{name:"DEF%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"DEF%", priority:0}]
        }
    ],
    Zhongli: [
        {
            playstyle: "Off-Field Shielder",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/12/Zhongli-Infographic.png",
            sets: [
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Archaic Petra",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"CRate", priority:0}, {name:"HP%", priority:0}]
        }
    ],
    Bennet: [
        {
            playstyle: "Support",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/09/Bennett_5.0_-_cote_UPDATED-1.png",
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
                    comment: "Reaction Teams"
                },
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"HP%", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"HP%", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}]
        }
    ],
    Candace: [
        {
            playstyle: "On-Field DPS",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/10/Candace-On-Field-DPS-Infographic-1.png",
            sets: [
                {
                    name: "Nymph's Dream",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Heart of Depth",
                    pieces: 2,
                    priority: 1,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 2,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 2,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Hydro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"HP%", priority:0}]
        },
        {
            playstyle: "Hydro Enabler | Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Candace-Support-Infographic-5.1.png",
            sets: [
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Instructor",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Vourukasha's Glow",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 2,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"CDMG", priority:0}]
        }
    ],
    Collei: [
        {
            playstyle: "Off-Field Support",
            patch: "5.1",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Collei-Infographic-5.1.png",
            sets: [
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
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}],
                goblet: [{name:"Dendro%", priority:0}, {name:"EM", priority:0}],
                circlet: [{name:"CRIT", priority:0}, {name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    "Dendro Traveler": [
        {
            playstyle: "Off-Field Enabler",
            patch: "3.7",
            infographic: "https://keqingmains.com/wp-content/uploads/2023/07/DMC_1.png",
            sets: [
                {
                    name: "Deepwood Memories",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Gilded Dreams",
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
                sands: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Dendro%", priority:0}],
                circlet: [{name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Diona: [
        {
            playstyle: "Support",
            patch: "4.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/10/Diona-Infographic-4.4.png",
            sets: [
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Tenacity of the Millelith",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 2,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"HP%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"HP%", priority:0}, {name:"Heal%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"HP%", priority:0}, {name:"CRate", priority:0}]
        }
    ],
    "Electro Traveler": [
        {
            playstyle: "Battery",
            patch: "2.4",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/11/EMC-min.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 1,
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}]
        }
    ],
    "Geo Traveler": [
        {
            playstyle: "Quickswap DPS | Support",
            patch: "2.6",
            infographic: "https://keqingmains.com/wp-content/uploads/2022/11/GMC-min.png",
            sets: [
                {
                    name: "Gladiator's Finale",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Shimenawa's Reminiscence",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Archaic Petra",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 2,
                    priority: 0,
                },
                {
                    name: "Husk of Opulent Dreams",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Lavawalker",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Thundersoother",
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
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Geo%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Gorou: [
        {
            playstyle: "Support",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Gorou-Infographic-4.5.png",
            sets: [
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                // the exile
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}],
                goblet: [],
                circlet: [{name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, "CRate"]
        }
    ],
    Mika: [
        {
            playstyle: "Healer | Buffer",
            patch: "4.5",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Mika-Infographic-4.5.png",
            sets: [
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                },
                {
                    name: "Ocean-Hued Clam",
                    pieces: 4,
                    priority: 1,
                },
                {
                    name: "Song of Days Past",
                    pieces: 4,
                    priority: 1,
                },
                // the exile
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"HP%", priority:0}],
                goblet: [{name:"HP%", priority:0}],
                circlet: [{name:"Heal%", priority:0}, {name:"CRate", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRate", priority:0}, {name:"HP%", priority:0}]
        }
    ],
    Ororon: [
        {
            playstyle: "Off-Field DPS | Support",
            patch: "5.2",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/11/Ororon-Infographic-5.2.png",
            sets: [
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}, {name:"ER", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    "Kujou Sara": [
        {
            playstyle: "Off-Field Support & DPS",
            patch: "5.0",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/09/Kujou_Sara_5.0_-_cote__euphorysm.png",
            sets: [
                {
                    name: "Emblem of Severed Fate",
                    pieces: 4,
                    priority: 0,
                    comment: "Damage"
                },
                {
                    name: "Noblesse Oblige",
                    pieces: 4,
                    priority: 0,
                    comment: "Support"
                },
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                    comment: "Support"
                },
            ],
            mainStats: {
                sands: [{name:"ER", priority:0}, {name:"ATK%", priority:0}],
                goblet: [{name:"Electro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"CRIT", priority:0}, {name:"ATK%", priority:0}]
        }
    ],
    Mavuika: [
        {
            playstyle: "On Field DPS",
            patch: "5.2",
            infographic: "/",
            sets: [
                {
                    name: "Obsidian Codex",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        },
        {
            playstyle: "Off-Field DPS",
            patch: "5.2",
            infographic: "/",
            sets: [
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"ATK%", priority:0}],
                goblet: [{name:"Pyro%", priority:0}],
                circlet: [{name:"CRIT", priority:0}]
            },
            subStats: [{name:"CRIT", priority:0}, {name:"ATK%", priority:0}, {name:"EM", priority:0}]
        }
    ],
    Citlali: [
        {
            playstyle: "Support",
            patch: "5.2",
            infographic: "/",
            sets: [
                {
                    name: "Scroll of the Hero of Cinder City",
                    pieces: 4,
                    priority: 0,
                },
            ],
            mainStats: {
                sands: [{name:"EM", priority:0}],
                goblet: [{name:"EM", priority:0}],
                circlet: [{name:"EM", priority:0}]
            },
            subStats: [{name:"ER", priority:0}, {name:"EM", priority:0}, {name:"ATK%", priority:0}]
        }
    ]
}
