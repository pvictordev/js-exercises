// 1. Reverse a String
function reverseString(str) {

    // split the string into array elements, reverse the array, transform the array back to string
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));


// 2. Find the Longest Word
function longestWord(str) {

    const words = str.split(' ');

    let longestWordLength = 0;

    for (let word of words) {
        // compare each word
        if (word.length > longestWordLength) {
            longestWordLength = word.length;
        }
    }

    return longestWordLength;

}

console.log(longestWord("lorem ipsum dolor sit amet."))