
 // TASK 6: TERNARY AND LOGICAL AND

const role = "editor";
const cartItems = 0;

// Determine access using nested ternary operators
const access =
  role === "admin"
    ? "Full Access"
    : role === "editor"
      ? "Edit Access"
      : role === "viewer"
        ? "Read Only"
        : "No Access";

console.log("Access level:", access);

// Test logical AND with an empty cart
console.log("Logical AND test:", cartItems && "View Cart");
// Output: 0, because 0 is falsy and JavaScript returns the
// first falsy operand rather than the second operand.

// Show "View Cart" only when there are items
const cartMessage = cartItems > 0 && "View Cart";

console.log("Cart message:", cartMessage);
