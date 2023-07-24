'use strict';

export {secondsToDate, toBase2Converter, substringOccurrencesCounter, repeatingLitters, redundant, towerHanoi, matrixMultiplication, gather};

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    const date = new Date('2020-06-01T00:00:00');
    date.setSeconds(date.getSeconds() + seconds);
    return date;
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    return (decimal >>> 0).toString(2);
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 *
 * if multiple occurrence in word are found, then count them as one
 *
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    const words = text.split(' ');
    let count = 0;
    const regex = new RegExp(substring, 'gi');
    for (const word of words) {
        const matches = word.match(regex);
        count += matches ? 1 : 0;
    }
    return count;
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * if not repeated, then add the character once
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    let result = '';
    const map = new Map();

    // count the number of occurrences of each character in the string
    for (const char of string) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    // iterate through the string and add repeated characters
    for (const char of string) {
        if (map.get(char) < 2) {
            result += char + char;
        } else {
            map.set(char, map.get(char) + 1);
            result += char;
        }
    }

    return result;
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
    return () => str;
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number} steps
 */
function towerHanoi(disks) {
    if (disks < 0) {
        throw new Error('disks must be greater than 0');
    }

    return (2 ** disks) - 1;
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    const n = matrix1.length;
    const result = new Array(n).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello!"
 */
function gather(str) {
    const args = [str];
    const orders = [];

    let addArgFunction = function addArg(arg) {
        args.push(arg);
        return addArg;
    }

    let orderFunction = function order(number) {
        orders.push(number);
        return order;
    }

    orderFunction.get = function () {
        return orders.map((index) => args[index]).join("");
    };

    addArgFunction.order = orderFunction;

    return addArgFunction;
}