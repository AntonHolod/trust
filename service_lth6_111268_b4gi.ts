const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

grape - 70
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
52 * 1
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

false / apple
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
true - 59,56,19,87,27,88,95,61,88,87,69,5,74,27,25,74,33,56,51,67,12,3,48,12,47,52,57,77,49,55,72,93,80,6,12,46,83,18,60,84,22,86
const sum = (a, b) => a + b;
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

grape

const getUniqueValues = array => [...new Set(array)];
