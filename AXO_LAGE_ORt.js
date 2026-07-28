// AXO_LAGE_ORt.js
// Lage‑Ort‑Modul für AXI → AXD → AXO

import { NC } from "./NC.js";
import { HDF_PATH } from "./hdf.js";
import { OrbitLink } from "./tmp.dat";
import { ABC_Vektor } from "./vector.js";
import { q81 } from "./q81.js";
import { CACHE_UPDATE } from "./cache.js";

export function AXO_LAGE_ORt(atom, standort, A, B, C) {

    // Orbit‑Daten
    const orbit = OrbitLink(atom);

    // Q‑Daten
    const q = q81(atom);

    // Vektor‑Daten
    const vec = ABC_Vektor(A, B, C, standort);

    // Standort‑Daten
    const nc = NC(standort);

    // Speicher‑Pfad
    const hdf = HDF_PATH(nc);

    // Cache aktualisieren
    CACHE_UPDATE(standort, q, vec);

    return {
        typ: "AXO-LAGE-ORT",
        standort: nc,
        orbit,
        vektor: vec,
        qualität: q.qualität,
        richtung: q.status,
        länge: q.nenner,
        hdf_tmp: hdf.tmp,
        hdf_cache: hdf.cache,
        id: `AXO-${nc}-${q.qualität}-${vec.AC.x}-${vec.AC.y}-${vec.AC.z}`
    };
}
