// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

console.log("This is Step 1");
function isEven(num){
    if(num % 2){
        console.log("",num,"is Even");
        num = true;
    }
    else{
        console.log("",num,"is Odd");
        num = false;
    }
}
isEven(5);

//s Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
console.log("This is Step 2");
for(let index = 0; index < 10; index++){
    isEven(index);
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.

console.log("This is Step 3");
function multiply(num1,num2){
    let product = num1 * num2;
    console.log("The product of",num1,"and",num2,"is",product);
}
multiply(4,5);

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.

console.log("This is Step 4");

let loop = 0;
    while(loop >= 0){
        let numberone =  prompt("Enter First Number: ");
        if(numberone >= 0){
            let numbertwo = prompt("Enter Second Number:");
            if(numbertwo >= 0){
                console.log("The First number is", numberone , "and the second is" , numbertwo);
                let product = numberone * numbertwo;
                console.log("The Answer:" , product);
            }
            else{
                console.log("The loop is Terminated!");
                break;
            }
    
        }
        else{
            console.log("The loop is Terminated!");
            break;
        }
    }

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.

console.log("This is Step 5");

function reverseString(Object){
    var reverse = "";

    for(var i = Object.length -1; i >= 0; i--){
        reverse += Object[i];
    }
    Object = reverse;
    console.log(Object);
    return reverse;
}
reverseString("Orange");

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.

console.log("This is Step 6");

reverseString("Hello");

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.

console.log("This is Step 7");

function countVowels(words){
    const Vowels = ["a","e","i","o","u"];

    let Countvowels = 0;

    for(let Letter of words.toLowerCase()) {
        if (Vowels.includes(Letter)){
            Countvowels++;
        }
    }
    return Countvowels;
}

console.log(countVowels("Hello I Am BayMax your personal Healthcare Companion!"));

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.

console.log("This is Step 8");

console.log(countVowels("JavaScript"));


// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.

console.log("This is Step 9");

function findMax(Find) {
    let Max = Find[0];

    for(let i = 1;i < Find.length;i++){
        if(Find[i] > Max){
            Max = Find[i];
        }
    }
    return Max;
}

console.log(findMax([2,5,6,8,4]));

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.

console.log("This is Step 10");

console.log(findMax([4, 9, 2, 7, 5]));

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.

console.log("This is Step 11");

function calculateFactorial(num){

    let answer = 1;
    if(answer === 0 ){
        answer = 1;
    }
    for(let i = 2; i <= num; i++){
        answer = answer * i;
        console.log(answer);
    }
    return answer;
}

console.log(calculateFactorial(6));

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.

console.log("This is Step 12");

console.log(calculateFactorial(5));-5

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.

console.log("This is Step 13");

function isPalindrome(String){
    const len = String.length;  

    for(let i = 0; i < len / 2; i++){
        if(String[i] !== String[len - 1 -i]){
            console.log("It is not a Palindrome");
            break;
        }
        else{
            console.log("It is a Palindrome");
            break;
        }
    }
}
isPalindrome("level");

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

console.log("This is Step 15");

function sumArray(number1){

    let totalOne = 0;
    for(const arg of number1){
        totalOne += arg;
    }
    return totalOne;
}

console.log(sumArray([1,5,6,3,4]));

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.

console.log("This is Step 16");

console.log(sumArray([1, 2, 3, 4, 5]));

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.

console.log("This is Step 17");

function capitalizeFirstLetter(Word){

    var Letter = "";
    
    for(var i = 0; i <= Word.length -1; i++){
        if(i == 0){
            Letter += Word[i].toUpperCase();
        }
        else{
            Letter += Word[i];
        }
        
    }
    return Letter;

}

console.log(capitalizeFirstLetter("hello"));

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.

console.log("This is Step 18");

console.log(capitalizeFirstLetter("javascript"));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.

console.log("This is Step 19");

function filterEvenNumbers(Number){

    let Even = [];
    
    for(var i = 0; i <= Number.length -1; i++){
        if(Number[i] % 2){
            Even.push(Number[i]);
        }       
    }
    return Even;

}

console.log("Even Number :",filterEvenNumbers([1,5,6,3,4]));

// Step 20: Call the filterEvenNu mbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.

console.log("This is Step 20");

console.log("Even Number :",filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));