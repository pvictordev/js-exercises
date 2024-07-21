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


// 3. Title Case Sentence
function titleCase(str) {

    const words = str.split(' ');

    const capitalizedWords = words.map(word => {

        // capitalize the first letter of each words and concatenate it with the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return capitalizedWords.join(' ');

}

console.log(titleCase("I'm a little tea pot"));