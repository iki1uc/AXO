// AXO_Final.js
// Endgültige AXO-Fertigstellung: verbindet AXI, AXD, AXO, POOL, DR, NC-Hub-All

import { AXO_Operator } from "./AXO-Operator.js";
import { AXO_ID } from "./AXO_ID.js";
import { AXO_LAGE_ORt } from "./AXO_LAGE_ORt.js";

// Externe Infrastruktur
import { POOL } from "../POOL/index.js";
import { DR } from "../DR/index.js";
import { NCHUB } from "../NC-Hub-All/index.js";

export function AXO_Final(input) {

    // 1. Lage/Ort bestimmen
    const lage = AXO_LAGE_ORt(
        input.atom,
        input.standort,
        input.A,
        input.B,
        input.C
    );

    // 2. AXO-ID erzeugen
    const axo_id = AXO_ID(
        input.atom,
        input.standort,
        input.A,
        input.B,
        input.C
    );

    // 3. AXO-Operator ausführen
    const axo = AXO_Operator(input);

    // 4. AXO in POOL registrieren
    POOL.register("AXO", {
        id: axo_id.axo_id,
        standort: lage.standort,
        vektor: lage.vektor,
        orbit: lage.orbit,
        qualität: lage.qualität,
        richtung: lage.richtung,
        länge: lage.länge
    });

    // 5. AXO durch DR routen
    DR.route("AXO", axo);

    // 6. AXO im NC-Hub-All sichtbar machen
    NCHUB.attach("AXO", {
        id: axo_id.axo_id,
        operator: axo,
        lage
    });

    return {
        status: "AXO-FINAL",
        axo_id: axo_id.axo_id,
        operator: axo,
        lage,
        pool: "AXO im POOL registriert",
        router: "AXO durch DR geroutet",
        hub: "AXO im NC-Hub-All sichtbar"
    };
}
