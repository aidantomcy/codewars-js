function squareDigits(num) {
  let numArray = Array.from(num.toString()).map(Number);
  let squaredArray = [];
  for (let i = 0; i < numArray.length; i++) {
    squaredArray.push(numArray[i] ** 2);
  }
  let squared = squaredArray.join("").toString();

  return parseInt(squared);
}
