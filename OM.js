AXO-{NC}-{Qualität}-{AC.x}-{AC.y}-{AC.z}
AXO-HH81-Q3-3-7-9
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
git clone https://github.com/DEINNAME/AXO.git
cd AXO
import { AXO_ID } from "./AXO_ID.js";

const id = AXO_ID("e-", "HH-81", 3, 7, 9);
console.log(id.axo_id);
