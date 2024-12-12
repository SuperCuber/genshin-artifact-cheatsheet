import { Builds } from "./_builds";

// TODO: remove Partial once we have all characters
export const builds: Partial<Builds> = {
    Albedo: [
        {
            playstyle: "Off-Field DPS",
            infographic: "https://keqingmains.com/wp-content/uploads/2024/04/Albedo-Infographic-4.5.png",
            patch: "4.5",
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
            infographic: "https://keqingmains.com/wp-content/uploads/2024/02/Alhaitham-Infographic-4.4.png",
            patch: "4.4",
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

}