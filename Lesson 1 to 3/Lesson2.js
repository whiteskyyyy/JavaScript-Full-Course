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
console.log('Fahrenheit is ' + Fahrenheit) 