import { expect, test } from 'vitest'

import { sum, subtract, multiply, divide } from '@utils/arithmetics.js';

//Simple function to test addition
test('adds 1 + 2 to equal 3', () => {
    const result = sum(1,2);

    expect(result).toBe(3);
});

//Simple function to test subtraction 
test('subtracts 5 - 2 to equal 3', () => {
    const result = subtract(5, 2);

    expect(result).toBe(3);
});

//Simple function to test multipilcation
test('multiply 2 * 3', () => {
    const result = multiply(2, 3);

    expect(result).toBe(6)
});

// Simple function to test division
test('divides 6 / 2 to equal 3', () => {
    const result = divide(6, 2);

    expect(result).toBe(3);
});