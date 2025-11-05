/**
 * Performs various calculations based on the provided parameters
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - Type of calculation to perform (add, subtract, multiply, divide, power, average)
 * @returns {number|string} Result of the calculation or error message
 */
function calculate(a, b, operation) {
    // Input validation
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error: Both parameters must be numbers';
    }

    // Perform calculation based on operation type
    switch (operation.toLowerCase()) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                return 'Error: Cannot divide by zero';
            }
            return a / b;
        case 'power':
            return Math.pow(a, b);
        case 'average':
            return (a + b) / 2;
        default:
            return 'Error: Invalid operation. Supported operations are: add, subtract, multiply, divide, power, average';
    }
}

// Example usage:
console.log(calculate(10, 5, 'add'));      // Output: 15
console.log(calculate(10, 5, 'subtract')); // Output: 5
console.log(calculate(10, 5, 'multiply')); // Output: 50
console.log(calculate(10, 5, 'divide'));   // Output: 2
console.log(calculate(2, 3, 'power'));     // Output: 8
console.log(calculate(10, 6, 'average'));  // Output: 8
