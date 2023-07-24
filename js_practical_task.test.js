import {
    secondsToDate,
    toBase2Converter,
    substringOccurrencesCounter,
    repeatingLitters,
    redundant,
    towerHanoi,
    matrixMultiplication,
    gather
} from './js_practical_task.js';

describe('secondsToDate', () => {
    it('should return 01.06.2021 for 31536000 seconds', () => {
        const result = secondsToDate(31536000);
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(5);
        expect(result.getDate()).toBe(1);
    });

    it('should return 01.06.2020 for 0 seconds', () => {
        const result = secondsToDate(0);
        expect(result.getFullYear()).toBe(2020);
        expect(result.getMonth()).toBe(5);
        expect(result.getDate()).toBe(1);
    });

    it('should return 02.06.2020 for 86400 seconds', () => {
        const result = secondsToDate(86400);
        expect(result.getFullYear()).toBe(2020);
        expect(result.getMonth()).toBe(5);
        expect(result.getDate()).toBe(2);
    });
});

describe('toBase2Converter', () => {
    it('should return binary string representation of decimal number 5', () => {
        expect(toBase2Converter(5)).toBe('101');
    });

    it('should return binary string representation of decimal number 10', () => {
        expect(toBase2Converter(10)).toBe('1010');
    });

    it('should return binary string representation of decimal number 0', () => {
        expect(toBase2Converter(0)).toBe('0');
    });

    it('should return binary string representation of decimal number 1023', () => {
        expect(toBase2Converter(1023)).toBe('1111111111');
    });

    it('should return binary string representation of decimal number 1', () => {
        expect(toBase2Converter(1)).toBe('1');
    });

    it('should return binary string representation of decimal number -5', () => {
        expect(toBase2Converter(-5)).toBe('11111111111111111111111111111011');
    });

    it('should return binary string representation of decimal number -10', () => {
        expect(toBase2Converter(-10)).toBe('11111111111111111111111111110110');
    });

    it('should return binary string representation of decimal number -1023', () => {
        expect(toBase2Converter(-1023)).toBe('11111111111111111111110000000001');
    });
});

describe('substringOccurrencesCounter', () => {
    it('should return 0 for substring "a" and text "test it"', () => {
        expect(substringOccurrencesCounter('a', 'test it')).toBe(0);
    });

    it('should return 2 for substring "t" and text "test it"', () => {
        expect(substringOccurrencesCounter('t', 'test it')).toBe(2);
    });

    it('should return 2 for substring "T" and text "test it"', () => {
        expect(substringOccurrencesCounter('T', 'test it')).toBe(2);
    });

    it('should return 1 for substring "foo" and text "foobarfoo"', () => {
        expect(substringOccurrencesCounter('foo', 'foobarfoo')).toBe(1);
    });

    it('should return 1 for substring "abc" and text "abcabcabc"', () => {
        expect(substringOccurrencesCounter('abc', 'abcabcabc')).toBe(1);
    });

    it('should return 0 for substring "123" and text "456789"', () => {
        expect(substringOccurrencesCounter('123', '456789')).toBe(0);
    });
});

describe('repeatingLitters', () => {
    it('should return a string with each character repeated once', () => {
        expect(repeatingLitters('Hello')).toBe('HHeelloo');
    });

    it('should return a string with each character repeated once including space', () => {
        expect(repeatingLitters('Hello world')).toBe('HHeello  wworrldd');
    });

    it('should return an empty string when input is empty', () => {
        expect(repeatingLitters('')).toBe('');
    });

    it('should return a string with each digit repeated once', () => {
        expect(repeatingLitters('1234567890')).toBe('11223344556677889900');
    });
});

describe("redundant", () => {
    it("returns a function that returns the input string", () => {
        const f = redundant("hello");
        expect(typeof f).toBe("function");
        expect(f()).toBe("hello");
    });

    it("returns a function that returns an empty string", () => {
        const f = redundant("");
        expect(typeof f).toBe("function");
        expect(f()).toBe("");
    });

    it("returns a function that returns a number as a string", () => {
        const f = redundant("123");
        expect(typeof f).toBe("function");
        expect(f()).toBe("123");
    });
});

describe('towerHanoi', () => {
    it('should return 0 if number_of_disks <= 0', () => {
        expect(towerHanoi(0)).toBe(0);
    });

    it('should return 7 steps for 3 disks', () => {
        expect(towerHanoi(3)).toBe(7);
    });

    it('should return 15 steps for 4 disks', () => {
        expect(towerHanoi(4)).toBe(15);
    });

    it('should return 31 steps for 5 disks', () => {
        expect(towerHanoi(5)).toBe(31);
    });

    // additional tests
    it('should return 1 step for 1 disk', () => {
        expect(towerHanoi(1)).toBe(1);
    });

    it('should return 3 steps for 2 disks', () => {
        expect(towerHanoi(2)).toBe(3);
    });
    it('should throw an error if disks negative', () => {
        expect(() => towerHanoi(-3)).toThrowError();
    });
});

describe('matrixMultiplication', () => {
    it('should return the product of two matrices of size 2x2', () => {
        const matrix1 = [[1, 2], [3, 4]];
        const matrix2 = [[5, 6], [7, 8]];
        const expectedResult = [[19, 22], [43, 50]];
        const result = matrixMultiplication(matrix1, matrix2);
        expect(result).toEqual(expectedResult);
    });

    it('should return the product of two matrices of size 3x3', () => {
        const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrix2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expectedResult = [[30, 24, 18], [84, 69, 54], [138, 114, 90]];
        const result = matrixMultiplication(matrix1, matrix2);
        expect(result).toEqual(expectedResult);
    });
});

describe("gather", () => {
    it("should return a function that can be called multiple times", () => {
        const fn = gather("a");
        expect(typeof fn).toBe("function");
        expect(fn("b")("c")).toBe(fn);
    });

    it("should return the ordered arguments as a string abc", () => {
        expect(gather("a")("b")("c").order(0)(1)(2).get()).toBe("abc");
    });

    it("should return the ordered arguments as a string cba", () => {
        expect(gather("a")("b")("c").order(2)(1)(0).get()).toBe("cba");
    });

    it("should return the ordered arguments as a string hello!", () => {
        expect(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()).toBe("hello!");
    });

    it("should return the ordered arguments as string abc, when assigning a variable in a process", () => {
        let intermediate = gather("a")("b");
        expect(intermediate("c").order(0)(1)(2).get()).toBe("abc");
    });
});




