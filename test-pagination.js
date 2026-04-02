const fs = require('fs');

const block = {
  tagName: 'H3',
  textContent: 'Problem 1: Multiple Linear Regression on Survival Data',
};

let forceNewPage = false;
if (true && 100 > 0) {
  if (block.tagName.toLowerCase().match(/^h[1-6]$/)) {
    if (block.textContent.trim().toLowerCase().includes('problem')) {
      forceNewPage = true;
    }
  }
}
console.log(forceNewPage);
