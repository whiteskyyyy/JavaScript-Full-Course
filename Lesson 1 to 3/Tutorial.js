/*
LESSON 1: Introduction to JavaScript
alert('Hello')
// alert is a built-in function in JavaScript that displays an 
// alert dialog with a specified message and an OK button.
// The message can be a string or any expression 
// that evaluates to a string.
alert('Tangina mo')

document.body.innerHTML = 'Jenny Malupit'
// document.body.innerHTML is a property that 
// allows you to get or set the HTML content of 
// the body element.

//Exercise number 1
alert('Good morning!')
alert('Seth Marcus Tite')
a = 10 + 5
alert(a)
a = 20 - 5
alert(a)
a = 2+2-5
alert(a)

document.body.innerHTML = 'Good mornin!'

document.body.innerHTML = 'Seth Marcus Tite'

document.body.innerHTML = 'You order a t-shirt for 10$'

a = 10+8+20
alert(a)
document.body.innerHTML = 'your total cost is $' +a; */

/* 
//LESSON 2: MATH

a = (2095 + 799)
c = (a + (b = Math.round(10/100 * a)))
console.log(a / 100)
console.log(b / 100)
console.log(c / 100)

//LESSON 2 EXERCISES: Numbers and Math
Soup = 10
Burger = 8
icrem = 5

total = Soup + (3 * Burger) + icrem
console.log('Soup is ' + Soup + ' Burger is ' + Burger + 
    ' Ice cream is ' + icrem)
console.log('Total Order is ' + total)

toaster = 1850
shirts = 750
console.log('Toaster is ' + toaster/100 +
    ' Shirts is ' + shirts/100)
console.log('Total Cost is ' + (toaster + (2 *shirts))/100)

Tax = (toaster + (2 * shirts)) * 0.10
console.log('Tax is ' + Tax/100)
Tax2 = (toaster + (2 * shirts)) * 0.20
console.log('Tax2 is ' + Tax2/100)
//Math.ceil() rounds a number UP 
// to the nearest integer
//Math.floor() rounds a number DOWN
// to the nearest integer
console.log('Round number 10.1 up is ' + Math.ceil(10.1)) // 11
console.log('Round number down: 10.9 is ' + Math.floor(10.9)) // 10

//Fahrenheit = (Celsius * 9/5) + 32
//Celsius = (Fahrenheit - 32) * 5/9

Celsius = 25 // Example Celsius value
Fahrenheit = (Celsius * 9/5) + 32
console.log('Fahrenheit is ' + Fahrenheit)
console.log('Celsius is ' + Celsius)

Fahrenheit = 86
Celsius = (Fahrenheit - 32) * 5/9
console.log('Fahrenheit is ' + Fahrenheit)
console.log('Celsius is ' + Celsius)

Celsius = -5
Fahrenheit = (Celsius * 9/5) + 32
console.log('Celsius is ' + Celsius)
console.log('Fahrenheit is ' + Fahrenheit) */

/* // LESSON 3: Strings

// Using backticks (` `) for template literals allows both single (') and double (") quotes inside without escaping
a = `he said "I'm not the one"`
console.log(a); // Output: he said "I'm not the one"

// Using single quotes: to include an apostrophe (') inside, escape it with a backslash (\)
b = 'he said "I\'m not the one"'
console.log(b); // Output: he said "I'm not the one"

// Using double quotes: to include a double quote ("), escape it with a backslash (\)
c = "he said \"I'm not the one\""
console.log(c); // Output: he said "I'm not the one"

// To write a backslash (\) as a string, escape it with another backslash: \\
// So, to print two backslashes, we use four backslashes in total
d = "\\\\0_0//"
console.log(d); // Output: \\0_0//

// Function that returns an HTML heading string (h1) with the given name
function greet(name) {
    return `<h1>${name}</h1>`; // Template literal with embedded variable
}

// Call the function with a string and append the result to the webpage
document.body.innerHTML += greet("Tangina mo jenny avorque");

// Create a string with embedded expressions using a template literal
// 1 + 1 evaluates to 2
// (2095 + 799) / 100 = 28.94, representing total cost in dollars
sample = `Items (${1+1}): $${(2095 + 799) / 100}`

// Call greet() with the generated string and add it to the page
document.body.innerHTML += greet(sample);


// LESSON 3 EXERCISES: Strings

// Declare a variable 'name' with an initial string
name = 'My name is: ';

// Declare another string variable 'call'
call = 'Seth ';

// Concatenation: Add the value of 'call' to 'name'
name += call; // Now name = 'My name is: Seth '

// Output the result to the web page
document.body.innerHTML += name;

// Declare numeric variables
coffee = 5;
bagel = 3;

// Add the numbers (not concatenation in this case — it's arithmetic)
totalcost = coffee + bagel;

// Output the total using a template literal with embedded expression
// Note: The <br> tag creates a line break in HTML
document.body.innerHTML += `<br>Total cost is: $${totalcost}`; */



// LESSON 4: HTML CSS Review, Console.log

//HTML = Creates the content
//CSS = Changes the appearance /Styles the content
//JavaScript = Adds interactivity to the content

