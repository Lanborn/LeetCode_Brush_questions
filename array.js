// 只出现一次的数字
// 题目背景：
/*
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 */ 

// var singleNumber = function(nums) {
//     let reduce = 0;
//     nums.forEach(x=>{
//         reduce = reduce ^ x;
//     })
//     return reduce
// };

// 题解：使用位运算，^，使用异或运算，将所有值进行异或。

// 两个数组的交集2
 
// 题目背景：
/*

给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
*/


/**
 * 双指针，先排序，然后双指针思想对其进行查重，把重复的元素查出来并Push入新数组。
 * 在双指针查重的过程中，如果nums1[i]的值大于nums2[j]的值 --> j++ 如果nums2[j]的值大于nums1[i]的值 --> i++。
 * 
 */ 
 
 
// const nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
// const nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]

// var intersect = function(nums1, nums2) {
//     let arrAddress = [];

//     nums1.sort((a,b)=>{return a-b})
//     nums2.sort((a,b)=>{return a-b})

//     let i = 0;
//     let j = 0;
//     while(i<nums1.length && j < nums2.length){
//         if(nums1[i] < nums2[j]){
//             i ++;
//         }
//         else if(nums1[i] > nums2[j]){
//             j ++;
//         }
//         else if(nums1[i] == nums2[j]){
//             arrAddress.push(nums1[i])
//             i ++;
//             j ++;
//         }
//     }
//     return arrAddress;
// };

// console.log(intersect(nums1,nums2))


// map解法： 
// tips：charcodeat的方法：返回指定位置的字符的编码

// digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// var plusOne = function(digits) {
//     let count = '';
//     let n = 0;
//     for(let i = 0; i <= digits.length-1; i ++){
//         count += digits[i]
//     }
//     // count = parseInt(count)
//     count += 1;
//     console.log(count)
//     let flag = count
//     while(flag>=1){
//         flag /= 10
//         n++;
//     }
//     let newCount = count.toString()
//     let arrNew = []
//     for(let j = 0;j < n;j ++){
//         arrNew.push(newCount.charAt(j))
//     }
//     return arrNew;
// };

// plusOne(digits)


// 移动零

let nums = [0,1,0,3,12]

 var moveZeroes = function(nums) {
    for(let i = 0;i < nums.length; i ++){
        for(let j = i; j< nums.length; j++){
            if(nums[j] === 0){
                
            }
            else{

            }
        }
    }
    return nums;
};

console.log(moveZeroes(nums))