const marked = require('marked').marked || require('marked');

const txt = `
### **Problem 1: Multiple Linear Regression on Survival Data**

This problem requires analyzing data from a series of Stanford heart transplants. 
`;

console.log(marked.parse(txt));
