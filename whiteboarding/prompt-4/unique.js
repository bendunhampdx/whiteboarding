function unique(string) {
  let newStrr = "";
  for(let i =0; i < string.length; i++) {
    if (newStrr.includes(string[i]) === false) {
      newStrr += string[i];
    }
  }
  if (newStrr === string) {
  return true;
  } else {
  return false;
  }
}
