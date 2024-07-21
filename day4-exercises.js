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
    isAvailable: true
}

function describeBook(book) {
    const availability = book.isAvailable ? "available" : "unavailable";

    return `The book "${book.title}", written by ${book.author} and published in ${book.year}, is currently ${availability} in our stores.`;
}

console.log(describeBook(book));


// 3. Array of Objects
const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        isAvailable: true
    },
    {
        title: "Grokking Algorithms",
        author: "Aditya Bhargava",
        year: 2016,
        isAvailable: true
    },
    {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        year: 1936,
        isAvailable: false
    },

]

function getTitle(books) {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].title);
    }
}

getTitle(books);


// 4. Object Methods
const toggleIsAvailable = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    isAvailable: true,
    toggleAvailability: function () {
        this.isAvailable = !this.isAvailable;
    }
}

// print initial object
console.log(describeBook(toggleIsAvailable));

// toggle availability
toggleIsAvailable.toggleAvailability();

// print changed object
console.log(describeBook(toggleIsAvailable));
