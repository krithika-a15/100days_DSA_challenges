const pages = ["home", "about", "products", "home", "cart", "checkout"];
const k = 3;

function uniqueWindow(pages, k) {
  for (let i = 0; i <= pages.length - k; i++) {
    let uniquePages = {};
    let isUnique = true;
    for (let j = i; j < i + k; j++) {
      if (uniquePages[pages[j]]) {
        isUnique = false;
        break;
      }
      uniquePages[pages[j]] = true;
    }
    if (isUnique) {
      return true;
    }
  }
  return false;
}


console.log(uniqueWindow(pages, k)); // Output: true

//This code checks if there's a sequence of k web pages where all pages are different.

// 1. It looks at each sequence of k pages.
// 2. For each sequence, it checks if all pages are unique.
// 3. If it finds a sequence with all unique pages, it returns "true".
// 4. If it checks all sequences and doesn't find any with unique pages, it returns "false".


// Example: If k = 3 and pages are ["home", "about", "products", "home", "cart"],
//  it will check sequences like ["home", "about", "products"] and ["about", "products", "home"].
//  If any sequence has all different pages, it returns "true".
