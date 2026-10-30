
 // TASK 5: ARRAY METHODS

const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: true },
  { name: "Monitor", price: 120000, inStock: false },
  { name: "Keyboard", price: 15000, inStock: true },
];

// Get an array containing only product names
const productNames = products.map((product) => product.name);

// Get only products that are in stock
const inStockProducts = products.filter((product) => product.inStock);

// Get uppercase names of in-stock products
const inStockProductNames = products
  .filter((product) => product.inStock)
  .map((product) => product.name.toUpperCase());

console.log("Product names:", productNames);
console.log("In-stock products:", inStockProducts);
console.log("In-stock product names:", inStockProductNames);
