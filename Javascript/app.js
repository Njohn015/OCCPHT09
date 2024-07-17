console.log("Hello world");

// This is a Single line Comment
/* 
    This is a multi-line comment
 */
// Always lowercase function
function sayHello() {
    let name = "Nicole john";
// Function Variable name  = "String";
    console.log(name = "pogi");
            // over written
}

sayHello();

function sayHello1() {
    let name = "Nicole john";
    const age = 24;
    console.log(name);
    console.log(age);
}

sayHello1();

function sayHello3() {
    let name = "Nicole john";
    let age = 24;
    let bday = true;
    console.log(name);
    if(bday == true){
        age++;
    }
    console.log(age);
}

sayHello3();

function sayHello4() {
    let name = "Nicole john";   // String
    let age = 24;               // number
    let bday = true;            // boolean
    let Variable;               // undefined
    let sample = null;          // object

    let x = 5;
    let y = 10;
    let sum = x + y;
    console.log("What is your name ? ");
    console.log(sum);

    Variable = true;
    Variable = "2";
    Variable = 3;

    console.log(typeof(Variable));
    console.log(typeof(sample));
    console.log(typeof(sum));

}

sayHello4();

function sayHello5() {
    let x = 3;
    let y = 100;
    let sum = x + y;
    let diff  = x - y;
    let product = x * y;
    let quotient  = x / y;
    let modulo = x % y;

    
    console.log("Sum of x and y is ->", sum);
    console.log("Difference of x and y is ->", diff);
    console.log("Product of x and y is ->", product);
    console.log("Quotient of x and y is ->", quotient);
    console.log("Modulo of x and y is ->", modulo);
}

sayHello5();

function StringExpression(){
    console.log("Hello", "World");  // , is considereted a space
    console.log("Hello" + "World"); // no space
    console.log("Hello World");     // classic
    
    let sunny = true;
    let warm = false;

    // AND Operator will only show true if all/or both side true
    console.log("Sunny && Warm", sunny && warm);
    // AND Operator will only show true if either one of them is true
    console.log("Sunny && Warm", sunny || warm);
    //Negate will show the Opposite of the value
    console.log("!Sunny", !sunny);
}

StringExpression();

function  AssignmentExpressions(){
    let a = 10;
    let b = 5;

    a += b; // a = a + b
    console.log("a :", a);

    a -= b; // a = a - b
    console.log("a :", a);

    a *= b; // a = a * b
    console.log("a :", a);

    a /= b; // a = a / b
    console.log("a :", a);
}

AssignmentExpressions();

function Functioncall(num1, num2, num3, num4, num5){
    console.log(num1 + num2 + num3);
    console.log(num1 + num2 + num3 + num5); // NaN
    console.log(num5);                      // undefined
    console.log(num1 + num2 + num3 + num4); // 14String
    console.log(num1 + num2 + num3, num4);  // 14 'String'
    console.log(num1 + num2 + num3, num5);  // 14 undefined
}

Functioncall(5, 3, 6, "String");

//Control Structures and Loops

//Conditionals: If Statement
let age = 18;

//if
if(age>= 18){
    console.log("Your are eligible  to vote")
}

console.log(typeof(age >= 18));

// If else
if(age>= 19){
    console.log("Your are eligible  to vote")
}
else{
    console.log("Your are not eligible  to vote")
}64

// If else if else
let temperature = 15;

if(temperature  < 0 ){
    console.log("It's  freezing outside");
}
else if(temperature >= 0 && temperature < 6){
    console.log("It's 0 to 5 degrees outside");
}
else if(temperature >= 6 && temperature < 11){
    console.log("It's 6 to 10 degrees outside");
}
else if(temperature >= 11 && temperature < 16){
    console.log("It's 11 to 15 degrees outside");
}
else if(temperature >= 16 && temperature < 20){
    console.log("It's 16 to 20 degrees outside");
}
else{
    console.log("It's  warm outside");
}

// Switch statement

let day = "monday";

switch(day){
    case "Monday",
         "monday":
        console.log("It's Monday");
        break;
    case "Tuesday",
         "tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
            console.log("It's Wednesday");
            break;
    case "Thursday":
        console.log("It's Thursday");
        break;             
    case "Friday":
        console.log("It's Friday");
        break;       
    default:
        console.log("It's Weekend!")
}

//Iterative: loops
// For Loop
for(let index = 0; index < 10; index++){
    console.log(index ,"Count :");
}

// While loop
let count = 1;

while(count <= 5){
    console.log("Count:", count);
    count++;
}
console.log(count);

//Do -  while loop
let  i = 6;

do {
    console.log("Do-While count :", i);
    i++;
} while(i <= 5);

// Arrays and Array Method

let fruits = ["Avocado","Apple","Orange","kiwi"];
    //Accessing Array Elements
    console.log(fruits);
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[fruits.length - 1]);
    console.log(fruits[fruits.length]);
    console.log(fruits.length);
    
    //Modifying Array Elements
    fruits[1] = "Mango";
    console.log(fruits);
    console.log(fruits[1]);
    
    // Add an Element  at the end of the Array
    fruits.push("Banana");
    console.log(fruits);
    
    // Deleted the last object
    fruits.pop();
    console.log(fruits);
    fruits.pop();
    console.log(fruits);

    // Deleted a object of what you declare to greater than
    fruits.splice(1, fruits.length);
    console.log(fruits);

    //Array Iteration with for loop
    let numbers = [1, 2, 3, 4, 5, 6];

    for(let index = 0; index <= 5; index++){
        console.log(numbers[index]);
    }
    for(let index = numbers.length-1; index >= 0; index--){
        console.log(numbers[index]);
    }

    // Array iteration using for each method
    fruits = ["Rashberry", "Durian", "Strawberry", "Kiwi", "Melon"];
    console.log(fruits);

    fruits.forEach(function(fruits){
        console.log(fruits);
    });

    fruits.forEach(fruits => {
        console.log(fruits);
    });

    // Array Methods
    // Common Array Methods

    let color = ["Red", "Green", "Blue"];
    console.log(color);

    // length
    console.log("Array  Length:", color.length);

    // indexof
    console.log("Index of Red", color.indexOf("Red"));
    console.log("Index of Green", color.indexOf("Green"));
    console.log("Index of Blue", color.indexOf("Blue"));
    console.log("Index of Brown", color.indexOf("Brown"));

    // includes / boolean
    console.log("Includes Green:", color.includes("Green"));
    console.log("Includes Brown:", color.includes("Brown"));

    // Join
    console.log("Joined Array:", color.join());

    // Slice
    let slicedArray = color.slice(1,2);
    console.log(slicedArray);
    console.log(color);

    // Splice
    let removedElements = color.splice(2,3);
    console.log("Removed  Elements:", removedElements);
    console.log("Updated Array :", color);

    // Object Literals

    // Step 1 on creating Object literal

    const person = {
        // Step 2: Add Properties
        firstname: "Tristan",
        lastname: "Pogi",
        age: 21,
        hobbies: ['Reading', 'Traveling', 'Playing'],

        // Step 3:: Add a method to the object
        greet: function(){
            console.log(`Hello, my name is ${this.firstname} ${this.lastname}. Nice to meet you!`);
        }
    }

    //Step 4: Accessing object properties
    console.log(person.firstname);
    console.log(person.lastname);
    console.log(person.age);
    console.log(person.hobbies[2]);
    console.log(person.hobbies.length);
    console.log(person.greet);

    // Step 5: Modifying Object Properties
    person.firstname = "Nicole john";
    console.log(person.firstname);
    person.age = 22;
    console.log(person.age);

    // Step 6: Accesing Object Methods
    person.greet();

    //Step 7: Adding new properties to the object
    person.nationality = "Filipino";
    console.log(person.nationality);

    // Step 8:  Adding new methods to the object.
    person.introduce = function (){
        console.log(`I am ${this.age} years old.`);
    }

    person.introduce();

    //Step 9: Nesting Objects
    const address = {
        country: "Japan",
        city: "Legazpi",
        street: "123 street",
    }

    person.address = address;
    console.log(person.address.country);
    console.log(`I am`, person.firstname , person.lastname ,`who is`, person.age, `years old. I live in`, person.address.street, person.address.city, "and it is nice to meet you !");

    console.log(person);


    //Wrong Answer

    //No.4
    function repeatedlyInput(){
        let numberone =  prompt("Enter First Number: ");
        if(numberone >= 0){
            let numbertwo = prompt("Enter Second Number:");
            if(numbertwo >= 0){
                console.log("The First number is", numberone , "and the second is" , numbertwo);
                let product = numberone * numbertwo;
                console.log("The Answer:" , product);
                repeatedlyInput();
            }
            else{
                console.log("The loop is Terminated!");
            }
    
        }
        else{
            console.log("The loop is Terminated!");
        }
    }
    repeatedlyInput();