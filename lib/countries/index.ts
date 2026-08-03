// lib/countries/index.ts

import { indonesia } from "./indonesia";
import { germany } from "./germany";
import { uae } from "./uae";
// import { singapore } from "./singapore";
// import { usa } from "./usa";

export const countries = {
    indonesia,
    germany,
    uae,
    // singapore,
    // usa,
} as const;