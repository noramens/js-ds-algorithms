//receiving a number as input
var romanToInt = function (num) {
  const definedNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let accumulator = '';

  for (let key in definedNumerals) {
    const numberValue = definedNumerals[key];

    while (numberValue <= num) {
      num -= numberValue;
      accumulator += key;
    }
  }
  console.log(accumulator);
};

romanToInt(1997);

/* 
    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
    Given a roman numeral, convert it to an integer.

    Example 1:

    Input: s = "III"
    Output: 3
    Explanation: III = 3.


    Example 2:

    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.

    Example 3:

    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
function convertStringToRomanNumerals(str) {
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let accumulator = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'I' && str[i + 1] === 'V') {
      accumulator += 4;
      i++;
    } else if (str[i] === 'I' && str[i + 1] === 'X') {
      accumulator += 9;
      i++;
    } else if (str[i] === 'X' && str[i + 1] === 'L') {
      accumulator += 40;
      i++;
    } else if (str[i] === 'X' && str[i + 1] === 'C') {
      accumulator += 90;
      i++;
    } else if (str[i] === 'C' && str[i + 1] === 'D') {
      accumulator += 400;
      i++;
    } else if (str[i] === 'C' && str[i + 1] === 'M') {
      accumulator += 900;
      i++;
    } else {
      accumulator += romanHash[str[i]];
    }
  }

  console.log(accumulator);
}
convertStringToRomanNumerals('MCMXCIV');
