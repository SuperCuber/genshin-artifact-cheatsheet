import { elements, realStatNames, Stat, StatName, statOrder } from "./data";
import { mapObject } from "./util";

export function formatStats(input: Stat[]): string {
    const stats = aggregateStats(input);
    const byPriority = Object.groupBy(stats, stat => stat.priority);
    const grouped = Object.keys(byPriority).sort((a, b) => Number(a) - Number(b)).map(Number).map(priority => byPriority[priority]!);
    grouped.forEach(group => group.sort((a, b) => statOrder[a.name] - statOrder[b.name]));
    return grouped.map(g => g.map(s => s.name).join(", ")).join(" > ");
}

function aggregateStats(stats: Stat[]): Stat[] {
    // 1. Split stats
    const split = stats.flatMap(splitStat);
    // 2. Make map of StatName to priority
    const grouped = Object.groupBy(split, stat => stat.name);
    const statName2Priority = mapObject(grouped, (_, v) => aggregatePriorities(v.map(stat => stat.priority)));
    // 3. For each priority, join stats
    const priority2StatEntries = Object.groupBy(Object.entries(statName2Priority), ([_, v]) => v)
    const priority2StatName = mapObject(priority2StatEntries, (_, v) => v!.map(([k, _]) => k)) as Record<number, StatName[]>;
    const joined = Object.entries(priority2StatName).map(([priority, stats]) => joinStats(Number(priority), stats as StatName[])).flat();
    return joined;
}

function splitStat(stat: Stat): Stat[] {
    switch (stat.name) {
        case "CRIT":
            return [
                { name: "CRate", priority: stat.priority },
                { name: "CDMG", priority: stat.priority },
            ];
        case "Element%":
            return elements.map(name => ({ name, priority: stat.priority }));
        case "Any":
            return realStatNames.map(name => ({ name, priority: stat.priority }));
        default:
            return [stat];
    }
}

function aggregatePriorities(priorities: number[]): number {
    return priorities.reduce((a, b) => a + b, 0) / priorities.length;
}

function joinStats(priority: number, stats: StatName[]): Stat[] {
    const deduped = new Set(stats);
    if (realStatNames.every(e => deduped.has(e))) {
        realStatNames.forEach(e => deduped.delete(e));
        deduped.add("Any");
    }
    if (deduped.has("CRate") && deduped.has("CDMG")) {
        deduped.delete("CRate");
        deduped.delete("CDMG");
        deduped.add("CRIT");
    }
    if (elements.every(e => deduped.has(e))) {
        elements.forEach(e => deduped.delete(e));
        deduped.add("Element%");
    }
    return Array.from(deduped).map(name => ({ name, priority }));
}

