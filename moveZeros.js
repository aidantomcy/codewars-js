const moveZeros = (arr) => {
  let zerosArr = [];
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zerosArr.push(arr[i]);
    } else {
      finalArr.push(arr[i]);
    }
  }

  finalArr.push(...zerosArr);

  return finalArr;
};
