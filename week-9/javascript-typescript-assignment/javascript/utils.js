 // TASK 7: ES MODULES — NAMED EXPORTS

export const add = (a, b) => a + b;

export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const APP_VERSION = "1.0.0";

// DEFAULT EXPORT
const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(amount);

export default formatCurrency;
