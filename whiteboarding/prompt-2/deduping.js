
//without using .filter()
function deduping(arr) {
  let newArr = [];
  arr.forEach(function(item) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    };
  });
    
  return newArr;
};


//with using .filter()
function deduping(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
};
