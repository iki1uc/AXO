// AXO-Operator.js
// Vollständiger AXO-Operator für AXI → AXD → AXO

import { AXO_ID } from "./AXO_ID.js";
import { OrbitLink } from "./tmp.dat";
import { ABC_Vektor } from "./vector.js";
import { q81 } from "./q81.js";
import { NC } from "./NC.js";
import { HDF_PATH } from "./hdf.js";
import { CACHE_UPDATE } from "./cache.js";

export function AXO_Operator(input) {

    // AXI → liefert atom, standort, A, B, C
    const { atom, standort, A, B, C } = input;

    // Orbit-Pool
    const orbit = OrbitLink(atom);

    // Q-Pool
    const q = q81(atom);

    // Vektor-Pool
    const vec = ABC_Vektor(A, B, C, standort);

    // NC-Pool
    const nc = NC(standort);

    // Speicher-Pool
    const hdf = HDF_PATH(nc);

    // Cache-Pool
    CACHE_UPDATE(standort, q, vec);

    // AXO-ID erzeugen
    const axo = AXO_ID(atom, standort, A, B, C);

    return {
        typ: "AXO-OPERATOR",
        standort: nc,
        orbit,
        vektor: vec,
        qualität: q.qualität,
        richtung: q.status,
        länge: q.nenner,
        axo_id: axo.axo_id,
        hdf_tmp: hdf.tmp,
        hdf_cache: hdf.cache,
        operator_status: "AXO-Berechnung erfolgreich"
    };
}
