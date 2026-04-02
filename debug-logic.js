const appState = { autoPageBreak: true };
const contentWidth = 500, contentHeight = 1000;
let usedHeight = 100;
let forceNewPage = false;
let block = { tagName: 'h3', textContent: 'Problem 1:', cloneNode: () => block };
let blockHeight = 50;

if (appState.autoPageBreak && usedHeight > 0) {
  if (block.tagName.toLowerCase().match(/^h[1-6]$/)) {
    if (block.textContent.trim().toLowerCase().includes('problem')) {
      forceNewPage = true;
    }
  }
}

if (!forceNewPage && usedHeight + blockHeight <= contentHeight) {
  usedHeight += blockHeight;
  console.log("Fits on current page");
} else if (usedHeight === 0 && blockHeight > contentHeight) {
  console.log("Split block");
} else {
  console.log("Start new page");
  usedHeight = blockHeight;
}
