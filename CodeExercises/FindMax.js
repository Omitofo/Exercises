// O(N), O(N)



const findMax = (nums) => {
    return Math.max(...nums);
};

let array = [ 1,5,8,9,6,5,8,7,4,51,2,6,3,2,5,4,7]

console.log(findMax(array));





/// different method. More efficient. O(N), O(1)

const findMax2 = (nums) => {

    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > max){
            max = nums[i];
        }
    }
    return max;
}

console.log(findMax2(array));
