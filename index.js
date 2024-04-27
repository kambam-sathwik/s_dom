// Creating Elements & DOM Relations
// Deliverables:

// 1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".

// 2. Make the sub-heading text italic.

// 2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

// 3. On this paragraph tag set an id of "fruits-total".
const subhead = document.createElement("h3");
const subheadtxt = document.createTextNode(
  "Buy high quality organic fruits online"
);
subhead.appendChild(subheadtxt);
subhead.style.fontStyle("italic");
const head = document.querySelector("#header");
head.appendChild(subhead);
