function sumIndices(nums, target) {
  const mapTable = {};

  nums.forEach((num, index) => {
    mapTable[num] = index;
  });

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (mapTable.hasOwnProperty(diff) && mapTable[diff] !== i) {
      return [i, mapTable[diff]];
    }
  }
}

sumIndices([1, 2, 3, 4, 5, 6, 7], 7);
