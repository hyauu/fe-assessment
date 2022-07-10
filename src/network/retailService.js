//flow
import type { RetailState } from "../types/retail.js";

let dataFile = require("./stackline_frontend_assessment_data_2021.json");

export function getRetailInfo(): RetailState {
  return dataFile[0];
}
