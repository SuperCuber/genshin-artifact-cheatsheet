import { Stat } from "./data";

/** Dedups and sorts stats, as well as grouping similar stats together */
export function formatStats(stats: Stat[]): Stat[] {
    let distinct = [...new Set(stats)];
    if (distinct.includes("CRate") && distinct.includes("CDMG")) {
        distinct.push("CRIT");
    }
    if (distinct.includes("CRIT")) {
        distinct = distinct.filter(s => s !== "CRate" && s !== "CDMG");
    }
    distinct.sort()
    return distinct;
}
