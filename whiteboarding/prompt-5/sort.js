function sort(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < (numArray.length - i -1); j ++) {
      if (numArray[j] > numArray[j+1]) {
        let temp = numArray[j];
        numArray[j] = numArray[j+1];
        numArray[j+1] = temp;
      }
    }
  }
  return numArray;
}