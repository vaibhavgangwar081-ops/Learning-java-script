//ques -1 take a number and print whether its's positive ,negative or zero//
let number = 0;
if (number > 0) {
    console.log("positive.");
}
else if (number < 0) {
    console.log("negative.");
}
else {
    console.log("zero.");
}

//ques-2 check if a number is even or odd//
let num = 5;
if (num % 2 == 0) {
    console.log("even number");
}
else {
    console.log("odd number");
}

//ques-3 check if a number is divisible by 5.
let number1 = 10;
if (number1 % 5 == 0) {
    console.log("divisible by 5");
}
else {
    console.log("not divisible by 5");
}

//ques-4 check if a number is divisible by both 3 and 5//
let number2 = 15;
if (number2 % 3 == 0 && number2 % 5 == 0) {
    console.log("divisible by both 3 and 5");
}
else {
    console.log("not divisible by both 3 and 5");
}

//ques-5 check the year is leap year or not//
let year = 2020;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("leap year");
}
else {
    console.log("not a leap year");
}

//ques-6 take two numbers and print the largest number//
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
    console.log(num1 + "largest number");
}
else if (num2 > num1) {
    console.log(num2 + "largest number");
}
else {
    console.log("both are equal");
}
//ques-7 take three numbers and print the largest number
let num3 = 30;
if (num3 > num1 && num3 > num2) {
    console.log(num3 + " is the largest number");
}
//ques-8  take a value  and print cold ,warm or hot based on the temperature value//
let temperature = 30;
if (temperature < 20) {
    console.log("cold");
}
else if (temperature >= 20 && temperature <= 30) {
    console.log("warm");
}
else {
    console.log("hot");
}

//ques-9 take a chracter and print whether it's a vowel or consonant//
let character = 'a';
if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
    console.log(character + " vowel");
}
else {
    console.log(character + " consonant");
}
//ques-10 check weather it'suppercase or lowercase,a digit ,or a special character//
let char = 'A';
if (char >= 'A' && char <= 'Z') {
    console.log(char + " uppercase letter");
}
else if (char >= 'a' && char <= 'z') {
    console.log(char + " lowercase letter");
}
else if (char >= '0' && char <= '9') {
    console.log(char + " digit");
}
else {
    console.log(char + " special character");
}

