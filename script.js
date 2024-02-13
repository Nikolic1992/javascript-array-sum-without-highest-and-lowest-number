const sumArray = (arr) => {
  if (!arr || arr.length <= 1) return 0;
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.slice(1, -1).reduce((sum, num) => sum + num, 0);
};

console.log(sumArray([6, 2, 1, 8, 10])); // Output: 16
console.log(sumArray([1, 1, 11, 2, 3])); // Output: 6
console.log(sumArray(null)); // Output: 0
console.log(sumArray([])); // Output: 0
console.log(sumArray([5])); // Output: 0
