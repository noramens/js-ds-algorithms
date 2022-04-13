/* Reverse a string. e.g. Given the string “Hello World”, return “dlrow olleh”. Ensure that the input is a string.
 */
function reverseString(str) {
  if (!str || typeof str !== 'string' || str.length < 2) {
    return 'ensure you pass a string';
  }

  const strArr = str.split('');
  let wordReverse = '';

  for (let i = strArr.length - 1; i >= 0; i--) {
    wordReverse += strArr[i];
  }

  return wordReverse;
}

reverseString('I am is the shortest word');
