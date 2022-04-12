/* Given a 6X6  2D Array, arr:
                                    1 1 1 0 0 0
                                    0 1 0 0 0 0
                                    1 1 1 0 0 0
                                    0 0 0 0 0 0
                                    0 0 0 0 0 0
                                    0 0 0 0 0 0

 An hourglass in  is a subset of values with indices falling in this pattern in arr's graphical representation:
                                    a b c
                                      d
                                    e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6X6.
 */

function twoDArray(arr) {
  //validation
  if (
    typeof arr !== 'object' &&
    arr.length !== 6 &&
    arr.map(i => i.length).reduce((a, b) => a + b) !== 36
  ) {
    return;
  }

  const totalSum = [];

  //nested loop
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let sum = 0;
      sum += arr[row][col];
      sum += arr[row][col + 1];
      sum += arr[row][col + 2];
      sum += arr[row + 1][col + 1];
      sum += arr[row + 2][col];
      sum += arr[row + 2][col + 1];
      sum += arr[row + 2][col + 2];

      totalSum.push(sum);
    }
  }

  return totalSum.length > 0 ? Math.max(...totalSum) : 0;
}

twoDArray([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]);
