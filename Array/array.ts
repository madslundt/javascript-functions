/**
 * Takes a list of items and returns a list of unique items.
 * @param {any[]} list - Input list.
 */
const removeDuplicates = (arr: any[]): any[] => arr.filter((item, index) => index === arr.indexOf(item));
const removeDuplicates2 = (arr: any[]): any[] => [...new Set(arr)];

/**
 * Takes a list with nested lists and flattens the list at one level.
 * @param {any[]} list - Input list.
 */
const flatten = (arr: any[]) => [].concat(...arr);

/**
 * Takes a list with nested lists and flattens the list at any level.
 * @param {any[]} list - Input list.
 */
const flatten2 = (arr: any[]) => arr.reduce((prevVal, curVal) => prevVal.concat(Array.isArray(curVal) ? flatten2(curVal) : curVal));

/**
 * Merge multiple lists
 */
const merge = (arr: any[]): any => [].concat(...arr);

/**
 * Pipe output of one function to another function.
 */
const pipe = (...fns) => arg => fns.reduce((v, fn) => fn(v), arg);

/**
 * Generate range from start to end.
 * @param {number} start - Start number.
 * @param {number} end - End number.
 * @param {number} step - Step level. Default 1. 
 */
const range = (start: number, end: number, step = 1) => Array.from({length: Math.ceil((end - start) / step)}, (_, i) => start + i * step);

/**
 * Generate random color.
 */
const color = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;

/**
 * Get max value in a list and count of max values.
 * @param {number[]) list - Input list.
 */
const getMaxValueAndCount = (arr: number[]): { max: number: count: number } => arr.reduce((acc, val) =>
        val > acc.max 
          ? { max: val, count: 1 } 
          : val === acc.max 
            ? { max: val, count: acc.count + 1 } 
            : acc
        , { max: 0, count: 0 });
