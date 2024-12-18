function foo(a, b) {
  // Explicit type checking to ensure both operands are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    // Handle non-numeric inputs appropriately, e.g., throw an error or return a default value
    console.error('Error: Both operands must be numbers.');
    return 0; // or throw new Error("Invalid input"); 
  }
}
console.log(foo(2, 3)); // Output: 5
console.log(foo(2, "3")); //Output: Error: Both operands must be numbers. 0
console.log(foo("2", 3)); //Output: Error: Both operands must be numbers. 0
console.log(foo("2", "3")); //Output: Error: Both operands must be numbers. 0