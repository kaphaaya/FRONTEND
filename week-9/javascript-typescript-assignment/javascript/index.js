 // TASK 7: IMPORT AND USE ES MODULES

import formatCurrency, {
  add,
  capitalize,
  APP_VERSION,
} from "./utils.js";

console.log("Addition:", add(20, 25));
console.log("Capitalized:", capitalize("javascript"));
console.log("App Version:", APP_VERSION);
console.log("Formatted Currency:", formatCurrency(45000));
