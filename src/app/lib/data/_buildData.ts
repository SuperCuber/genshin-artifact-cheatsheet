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
                    comment: "",
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
}
