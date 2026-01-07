import { expect, test } from 'vitest'

import { sum, subtract, multiply, divide } from '@utils/arithmetics.js';

//Simple function to test
test('adds 1 + 2 to equal 3', () => {
    const result = sum(1,2);

    expect(result).toBe(3);
});