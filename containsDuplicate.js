//  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
  const mapTable = {};

  nums.forEach((num, index) => {
    if (!mapTable.hasOwnProperty(num)) {
      mapTable[num] = nums.filter(item => item === num).length;
    }
  });

  const isDuplicate = Object.values(mapTable).map(item => item > 1);

  if (isDuplicate.includes(true)) {
    return true;
  }

  return false;
};
