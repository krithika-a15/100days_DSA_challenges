const pages = ["home", "about", "products", "home", "cart", "checkout"];
const k = 3;

function uniqueWindow(pages, k) {
  let start = 0;
  let uniquePages = new Set();

  for (let end = 0; end < pages.length; end++) {
    while (uniquePages.has(pages[end])) {
      uniquePages.delete(pages[start]);
      start++;
    }
    uniquePages.add(pages[end]);
    if (end - start + 1 === k) return true;
  }

  return false;
}


console.log(uniqueWindow(pages, k)); // Output: true


// This code checks if there's a group of k webpages that are all unique.

// -> It looks at each webpage one by one.
// -> If it finds a repeat, it moves the starting point forward.
// -> If it finds a group of k unique webpages, it returns true.
// -> If it doesn't find any group of k unique webpages, it returns false

//here in this problem it deals as -->

// Webpages: ["home", "about", "products", "home", "cart"]
// k: 3

// The code will return true because it finds a group of 3 unique webpages: ["about", "products", "home"].

