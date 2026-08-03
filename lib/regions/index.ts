// lib/regions/index.ts

import { europe } from "./europe";
import { middleEast } from "./middle-east";

export const regions = {
    europe,
    "middle-east": middleEast,
} as const;

export type RegionSlug = keyof typeof regions;

export function getRegion(slug: string) {
    if (!(slug in regions)) {
        return null;
    }

    return regions[slug as RegionSlug];
}