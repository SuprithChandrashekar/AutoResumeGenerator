const fs = require('fs');

const htmlText = "<h3><strong>Problem 1: Test</strong></h3><p>Para</p>";
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(htmlText);
const container = dom.window.document.body;

const blocks = Array.from(container.children);
const block = blocks[0];

let forceNewPage = false;
if (true) {
  if (block.tagName.toLowerCase().match(/^h[1-6]$/)) {
    if (block.textContent.trim().toLowerCase().includes('problem')) {     
      forceNewPage = true;
    }
  }
}
console.log('Force:', forceNewPage);
console.log('tagName:', block.tagName);
console.log('textContent:', block.textContent);
