// 1. Array Manipulation
const banana = ("b" + "a" + + "a" + "a").toLowerCase();
const favoriteFruits = ["pineapple", "apple", "watermelon"];

favoriteFruits.push("mongo");
favoriteFruits.unshift(banana);

favoriteFruits.pop();

console.log(favoriteFruits);


// 2. Object Creation
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    isAvailable: false
}

function describeBook(book) {
    const availability = book.isAvailable ? "available" : "unavailable";

    return `The book "${book.title}", written by ${book.author} and published in ${book.year}, is currently ${availability} in our stores.`;
}

console.log(describeBook(book));