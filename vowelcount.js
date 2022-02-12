function getCount(str) {
  let lowerCasedStr = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let result = 0;

  for (let i = 0; i < lowerCasedStr.length; i++) {
    if (vowels.includes(lowerCasedStr[i])) {
      result += 1;
    }
  }

  return result;
}
