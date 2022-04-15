// Return the first recurring Character. Example:

// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

function firstRecurring(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }

  return undefined;
}

firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]);
