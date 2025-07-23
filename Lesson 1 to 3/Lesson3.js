// LESSON 3: Strings

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
document.body.innerHTML += `<br>Total cost is: $${totalcost}`;