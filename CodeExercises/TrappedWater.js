// this function runs in O(n) Time complexity and O(1) space complexity


const TrappedWater = ( height ) => {
  let left = 0;
  let right = height.length -1;
  let maxLeft = 0;
  let maxRight = 0;
  let water = 0;

  while (left <= right) {
    if (height[left] < height[right]){
      if(height[left] > maxLeft){
        maxLeft = height[left];
      } else {
        water += maxLeft - height[left];
      }  
      left++
    } 
    
    else {
      if (height[right] > maxRight) {
        maxRight = height[right];
    } else {
        water += maxRight - height[right];
    }
    right--
  }
  }
  return water;
}

console.log(TrappedWater([5,0,2,0,3,0,4])) // Expect: 15
console.log(TrappedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected: 6
console.log(TrappedWater([4, 2, 0, 3, 2, 5])); // Expected: 9
console.log(TrappedWater([5, 0, 0, 0, 5])); // Expected: 15
console.log(TrappedWater([3, 0, 2, 0, 4])); // Expected: 7
console.log(TrappedWater([1, 0, 1])); // Expected: 1
console.log(TrappedWater([0, 0, 0, 0])); // Expected: 0
console.log(TrappedWater([7, 4, 0, 9])); // Expected: 10
console.log(TrappedWater([6, 0, 6, 0, 6])); // Expected: 12
console.log(TrappedWater([2, 0, 1, 0, 3, 1, 0, 4])); // Expected: 10
console.log(TrappedWater([9, 1, 8, 0, 6, 0, 3, 0, 5])); // Expected: 25


module.exports = TrappedWater;



const TrappedWater2 = (H) => {      //H = height;
  let left = 0;
  let right = H.length -1;
  let maxLeft = 0;
  let maxRight = 0;
  let water = 0;

  while(left <= right){

    if(H[left] < H[right]){
      
        if(H[left] > maxLeft){
          maxLeft = H[left];
        }
        else{
          water += maxLeft - H[left];
        }
        left++;
    }
    else{
      
      if(H[right] > maxRight){
        maxRight = H[right];
      }
      else{
        water += maxRight - H[right];
      }
      right--;
    }
  }

  return water;
};
console.log(TrappedWater([0, 0, 0, 0])); // Expected: 0
console.log(TrappedWater([0, 0, 0, 0])); // Expected: 0
console.log(TrappedWater([0, 0, 0, 0])); // Expected: 0
console.log(TrappedWater([0, 0, 0, 0])); // Expected: 0
console.log(TrappedWater2([9, 1, 8, 0, 6, 0, 3, 0, 5])) // expected: 25
console.log(TrappedWater2([9, 1, 8, 0, 6, 0, 3, 0, 5])) // expected: 25
console.log(TrappedWater2([9, 1, 8, 0, 6, 0, 3, 0, 5])) // expected: 25