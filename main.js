/**
 * Checks if a value is an integer in the simplest way.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is an integer, false otherwise.
 */
export function isInteger(value) {
    return typeof value === 'number' && value % 1 === 0;
}

import { isInteger } from "./helpers.js";

/**
 * Finds the Greatest Common Divisor (GCD) of two numbers using Euclid's algorithm.
 * @param {number} a - First positive integer.
 * @param {number} b - Second positive integer.
 * @returns {number} The GCD of a and b.
 */
function findGCD(a,b) {
    if (!isInteger(a) || !isInteger(b) || a <= 0 || b<= 0) {
        return "Invalid input. Please provide two positive integers.";
    }
    if (b>a) {
        let temp = a;
        a = b;
        b = temp;
    }
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Sample usage
console.log(findGCD(60, 48)); // 12
console.log(findGCD(12, 15)); // 3
console.log(findGCD(100, 80)); // 20
console.log(findGCD(7, 13));   // 1