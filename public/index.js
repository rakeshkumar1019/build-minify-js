function sum(var1, var2) {
    return var1 + var2
}
//this is test comments
const info = (name) => {
    const age = sum(10, 14)
    const profession = "Software Engineer"
    const message = `Hello ${name}, you are ${age} years old and you are a ${profession}`
    console.log(message)
}
info("Rakesh Kumar Singh")

const helper = () => {
    const name = "Rakesh Kumar Singh"
    const address = {
        streetNo: "4-53",
        city: "HYD",
        country: "IND"
    }
    console.log("*******************************************")
    console.log(`Hello ${name}!`)
    console.log(`Address Details`)
    console.log(`Street No: ${address.streetNo}`)
    console.log(`City: ${address.city}`)
    console.log(`Country: ${address.country}`)
    console.log("*******************************************")
}
helper()
// Simulated asynchronous function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate a delay (e.g., an API request)
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate success or failure

            if (success) {
                const data = { name: 'John', age: 30 };
                resolve(data); // Fulfill the promise with data
            } else {
                const error = new Error('Failed to fetch data');
                reject(error); // Reject the promise with an error
            }
        }, 1000); // Simulate a 1-second delay
    });
}

// Using the fetchData function with promises
fetchData()
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });

function recursiveTraversal(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                // If the value is an object, recursively traverse it
                recursiveTraversal(obj[key]);
            } else {
                // If the value is not an object, you can do something with it
                console.log(key, obj[key]);
            }
        }
    }
}

const nestedObject = {
    key1: 'value1',
    key2: {
        nestedKey1: 'nestedValue1',
        nestedKey2: {
            deeplyNestedKey: 'deeplyNestedValue',
        },
    },
    key3: 'value3',
};

recursiveTraversal(nestedObject);
// Create a Date object representing the current date and time
const currentDate = new Date();

// Create a Date object for a specific date and time (year, month, day, hour, minute, second)
const specificDate = new Date(2023, 0, 15, 10, 30, 0); // January 15, 2023, 10:30:00 AM

const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // Note: Months are 0-based (0 = January, 11 = December)
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();
const dateString = currentDate.toDateString(); // "Fri Sep 23 2023"
const localeDateString = currentDate.toLocaleDateString(); // Depends on the user's locale
const localeTimeString = currentDate.toLocaleTimeString(); // Depends on the user's locale
// Adding 3 days to the current date
currentDate.setDate(currentDate.getDate() + 3);

// Subtracting 1 hour from the current date
currentDate.setHours(currentDate.getHours() - 1);
const date1 = new Date(2023, 0, 15);
const date2 = new Date(2023, 0, 20);

if (date1 < date2) {
    console.log("date1 is earlier than date2");
}

const person = {
    name: {
        first: "John",
        last: "Doe",
    },
    age: 30,
};

const { name: { first, last }, age } = person;

console.log(first); // "John"
console.log(last); // "Doe"
console.log(age); // 30

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating an object (instance) of the class
  const person1 = new Person('Alice', 30);
  
  // Calling a method on the object
  person1.sayHello(); // Output: "Hello, my name is Alice and I am 30 years old."

  // Create an array to store the unique variable names
const variableNames = [];

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(variableNames);
