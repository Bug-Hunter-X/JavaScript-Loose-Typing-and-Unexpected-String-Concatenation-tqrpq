# JavaScript Loose Typing and Unexpected String Concatenation

This repository demonstrates a common JavaScript error stemming from the language's loose typing system.  When the + operator encounters a string, it performs string concatenation instead of numerical addition, even if one of the operands is a number.

The `bug.js` file showcases the issue.  The `bugSolution.js` file offers a solution by explicitly type checking operands before the addition operation.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code using a JavaScript interpreter (Node.js, browser console, etc.).
3. Observe the unexpected results. 
4. Examine the improved logic in `bugSolution.js` which handles the type conversion and ensures that only numerical addition takes place.