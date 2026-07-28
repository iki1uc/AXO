// AXO_ID.js
// Vollständiger AXO‑Operator für Q81/X81/AXI/AXD

import { OrbitLink } from "./tmp.dat";
import { ABC_Vektor } from "./vector.js";
import { q81 } from "./q81.js";
import { NC } from "./NC.js";
import { HDF_PATH } from "./hdf.js";
import { CACHE_UPDATE } from "./cache.js";

export function AXO_ID(atom, standort, A, B, C) {

    // Orbit‑Pool
    const orbit = OrbitLink(atom);

    // Q‑Pool
    const q = q81(atom);

    // Vektor‑Pool
    const vec = ABC_Vektor(A, B, C, standort);

    // NC‑Pool
    const nc = NC(standort);

    // Speicher‑Pool
    const hdf = HDF_PATH(nc);

    // Cache‑Pool
    CACHE_UPDATE(standort, q, vec);

    // AXO‑ID erzeugen
    const axo_id = `AXO-${nc}-${q.qualität}-${vec.AC.x}-${vec.AC.y}-${vec.AC.z}`;

    return {
        typ: "AXO-ID",
        standort: nc,
        orbit,
        vektor: vec,
        qualität: q.qualität,
        richtung: q.status,
        länge: q.nenner,
        hdf_tmp: hdf.tmp,
        hdf_cache: hdf.cache,
        axo_id
    };
}
