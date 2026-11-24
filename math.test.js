import { describe, it, expect } from 'vitest';
import { add } from './math.js';

describe('add function', () => {
    it('should add two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });
});