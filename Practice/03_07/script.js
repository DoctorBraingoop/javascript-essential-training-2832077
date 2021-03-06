/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const Book = {
  Title: "How to Code Your Own Software",
  Release_Date: 2022,
  Topics: [],
  author: {
    name: "Michael Smith",
    Age: 22,
    Gender: "Male",
  },
};
Book.Topics.push("JavaScript", "Computer Science", "Coding");
console.log(Book);
console.log(Book.Topics[1]);
