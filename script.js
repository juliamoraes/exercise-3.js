let salary = window.prompt(`How much do you make per month?`); //getting variable `salary` 
const annual = 12;

document.write(`Your monthly salary is ${salary.toLocaleString (`en-GB` , {style: `currency` , currency: `GBP` })}\n`); //Returns a date converted to a string using the current locale.
document.write(`\n Your annual salary is ${salary.toLocaleString(`en-GB`, {style: `currency` , currency: `GBP`}) * annual}`); // annual monthly salary