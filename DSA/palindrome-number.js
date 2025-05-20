/**
 * Check if number is palindrome or not 
 * we are first converting the number into string so many inbuilt function to manipulate string we can get 
 * then me split the string to get each element separately and then reverse it 
 * with the help of join we are joining the new string 
 * the + operator will convert the string into the number 
 * we are checking if number is less than 0 then it will return false;
 * we are using ternary operator here to make it a oneliner
 */

let isPalindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const result = isPalindrome(10) // false 
console.log(result)

/**
 * Leetcode question link- https://leetcode.com/problems/palindrome-number/description/
 */
