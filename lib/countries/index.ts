// lib/countries/index.ts

import { indonesia } from "./indonesia";
import { germany } from "./germany";
import { uae } from "./uae";
import { singapore } from "./singapore";
import { japan } from "./japan";
import { usa } from "./usa";
import { greece } from "./greece";
import { uk } from "./uk";

export const countries = {
    indonesia,
    germany,
    uae,
    singapore,
    japan,
    usa,
    greece,
    uk,
} as const;