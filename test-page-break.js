const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:8000');
  
  // Set the text content
  const markdown = `
Some text on page 1 that takes up a tiny bit of space.

### **Problem 1: Multiple Linear Regression on Survival Data**

This should be on page 2.
  `;
  
  await page.evaluate((md) => {
    document.getElementById('text-input').value = md;
    const inputEvent = new Event('input', { bubbles: true });
    document.getElementById('text-input').dispatchEvent(inputEvent);
  }, markdown);
  
  // Wait for rendering
  await page.waitForTimeout(2000);
  
  // Count pages
  const pageCount = await page.evaluate(() => {
    return document.querySelectorAll('#pages-container .page').length;
  });
  
  // Inspect blocks
  const blocks = await page.evaluate(() => {
    const area = document.getElementById('render-area');
    return Array.from(area.children).map(c => ({
      tag: c.tagName,
      text: c.textContent,
      outerHTML: c.outerHTML
    }));
  });

  console.log('Total pages:', pageCount);
  console.log('Render area blocks count:', blocks.length);
  // Just print the tags we processed.
  
  await browser.close();
})();
