const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

orange - 87,73,14,11,17,91,62,13,68,14,95,49,66,35,75,84,33,33,92,72,91,70,30,89,71
const sum = (a, b) => a + b;
85,8,38,56,38,75,73,87,95,32,4,0,8,35,97,36,74,75,77,66,35,98,39,93,69,82,79,24,98,1,78,21,87,80,86,50,79,10,21,3,50,3,16,53,75,21 - 80,68,5,49,22,49,50,57,84,2,9,78,15,22,37,76,54,89,92,74,32,76,26,13,9,31,22,72,69,82,96,68,90,81,17,45,3,4,96,65,66,56,86,84,79,90,68,79,98,41,75,68,40,8,69,51,91,16,56,40,68,11,15,88,64,90,55,45,59,1,39,76,26,82,63,30,99,55,0,82,28,70,54,82,75,13,43,70,41,76,23,57,38,93,35
const filterEvenNumbers = numbers => numbers.filter(isEven);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const sum = (a, b) => a + b;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
69 * 22,8,40,10,90,86,70,34,6,18,14,40,43
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
grape - 48
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const filterEvenNumbers = numbers => numbers.filter(isEven);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
