const txt = "forxxorfxdofr";
const pat = "for";

function countAnagrams(txt, pat) {
  let count = 0;
  let patSort = pat.split('').sort().join('');

  for (let i = 0; i <= txt.length - pat.length; i++) {
    let substr = txt.substring(i, i + pat.length);
    let substrSort = substr.split('').sort().join('');

    if (substrSort === patSort) {
      count++;
    }
  }

  return count;
}


console.log(countAnagrams(txt, pat)); // Output: 3



// This code counts how many times a word or phrase (called an anagram) appears in a text, 
// even if the letters are in a different order.


// 1. It sorts the letters in the word(pat) alphabetically.
// 2. Then it looks at each part of the text (txt) that is the same length as the word.
// 3. For each part, it sorts the letters alphabetically and compares it to the sorted word.
// 4. If they match, it means the part is an anagram of the word, so it counts it.
// 5. Finally, it returns the total count of anagrams found.

// Example: As if i tis code the word is "for" and the text is "forxxorfxdofr", 
// it will count how many times "for", "orf", "fro" etc. appear in the text.

