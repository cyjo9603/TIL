const maxArea = (height) => {
  const pointer = { left: 0, right: height.length - 1 };
  let max = 0;

  while (pointer.left !== pointer.right) {
    const currentHeight = Math.min(height[pointer.left], height[pointer.right]);
    const currentWidth = pointer.right - pointer.left;

    max = Math.max(currentHeight * currentWidth, max);

    height[pointer.left] > height[pointer.right] ? pointer.right-- : pointer.left++;
  }

  return max;
};
