const nums = [1,2,3,4,5,6,7,8];
// const part = nums.slice(2,5); //2,3,4 index
// console.log(part);

//const removed = nums.splice(2, 5); //cut kore nie jay
const removed2 = nums.splice(2,5, 6,7,8); //index 2 theke suru kore 5 ta element kete nie jabe and main array te 6,7,8 bosie dibe 2 index er position a
// console.log(removed2);
// console.log(nums);


const together = nums.join(", ");
console.log(together);