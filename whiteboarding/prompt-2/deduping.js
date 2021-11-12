function deduping(arr) {
  let newArr = [];
  arr.forEach(function(item) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    };
  });
    
  return newArr;
};
