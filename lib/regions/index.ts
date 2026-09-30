// lib/regions/index.ts

import { africa } from "./africa";
import { asiaPacific } from "./asia-pacific";
import { europe } from "./europe";
import { middleEast } from "./middle-east";
import { northAmerica } from "./north-america";

export const regions = {
    europe,
    "middle-east": middleEast,
    "asia-pacific": asiaPacific,
    "north-america": northAmerica,
    africa,
} as const;

export type RegionSlug = keyof typeof regions;

export function getRegion(slug: string) {
    if (!(slug in regions)) {
        return null;
    }

    return regions[slug as RegionSlug];
}