function compression(input) {
  let output = "";
  let inputCount = 1;
  let product = input.split("");
  for (let i = 0; i < product.length; i++) {
    if (product[i] === product[i +1]) {
      inputCount++;
    }else {
      output += inputCount + product[i];
      inputCount = 1;
    }

  }  
  return output;
}