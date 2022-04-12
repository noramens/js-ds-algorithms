// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = nums => {
  const hashMap = {};

  function getOccurance(arr, value) {
    return arr.filter(item => item === value).length;
  }

  nums.forEach(num => {
    if (!hashMap.hasOwnProperty(num)) {
      const occurance = getOccurance(nums, num);
      hashMap[num] = occurance;
    }
  });

  const mostOccured = Math.max(...Object.values(hashMap));

  return Object.keys(hashMap).find(key => hashMap[key] === mostOccured);
};

majorityElement([-1, 1, 1, 1, 2, 1]);
