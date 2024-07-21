// 1. Reverse a String
function reverseString(str) {

    // split the string into array elements, reverse the array, transform the array back to string
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); 