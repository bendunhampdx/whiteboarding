function replace(string) {
  let text = string.trim();
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      newText += '%20';
    } else {
      newText += text[i];
    }
  }
  return newText;
}