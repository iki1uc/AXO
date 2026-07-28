# AXO – Axiom Operator System

AXO ist das Achsen‑Operatorsystem, das aus AXI (Input) und AXD (Data) die finale Achsen‑Identität erzeugt.  
Es besteht aus vier Kernmodulen:

- AXO_ID.js  
- AXO_Operator.js  
- AXO_LAGE_ORt.js  
- AXO_Final.js  

Zusätzlich enthält das Repository:

- OM.js (Orbit‑Modul)
- index.html (Frontend‑Demo)
- id.html (AXO‑ID‑Viewer)
- pool-quelle-3.csv (Pool‑Definitionen)

---

## 🔧 Module

### **AXO_ID.js**
Erzeugt die eindeutige AXO‑Identität:

Format:
AXO-{NC}-{Qualität}-{AC.x}-{AC.y}-{AC.z}

Beispiel:

AXO-HH81-Q3-3-7-9


Rückgabe:
```json
{
  "typ": "AXO-ID",
  "standort": "HH-81",
  "orbit": { ... },
  "vektor": { "AC": { "x": 3, "y": 7, "z": 9 } },
  "qualität": "Q3",
  "richtung": "R+",
  "länge": 81,
  "hdf_tmp": "/hdf/tmp/HH-81",
  "hdf_cache": "/hdf/cache/HH-81",
  "axo_id": "AXO-HH81-Q3-3-7-9"
}
AXO_Operator.js
Verarbeitet AXI → AXD → AXO und erzeugt die Achsen‑Operation.

AXO_LAGE_ORt.js
Ermittelt Orbit, Qualität, Vektor, Standort und Speicherpfad.

AXO_Final.js
Bindet AXO in das Gesamtsystem ein:

POOL

DR

NC‑Hub‑All

Dies ist der finale Operator‑Connector.

🧪 Testlauf
js
import { AXO_ID } from "./AXO_ID.js";

const id = AXO_ID("e-", "HH-81", 3, 7, 9);
console.log(id.axo_id);
🌐 index.html
Die Datei index.html lädt:

AXO_ID.js

AXO_Operator.js

AXO_Final.js

OM.js

und zeigt die erzeugte AXO‑ID im Browser an.

🧩 id.html
Diese Datei zeigt die vollständige AXO‑ID‑Struktur als JSON‑Objekt.

📂 pool-quelle-3.csv
Definiert die drei Kern‑Pools:

Code
Pool,Quelle,Zweck
Q‑Pool,q81(v),"Qualität, Richtung, Länge"
Vektor‑Pool,"ABC_Vektor, OrbitLink, TMP81","Achse, ID, Vektor"
NC‑Pool,"NC, HDF_PATH, CACHE_UPDATE","Standort, Speicher, Routing"
🚀 Installation
bash
git clone https://github.com/iki1uc/AXO.git
cd AXO
📄 Lizenz
Dieses Projekt ist frei nutzbar.

Code

---

