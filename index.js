function isPalindrome(word) {
  // Convert the word to lowercase to ensure case-insensitive comparison
  // Initialize two pointers, one at the start of the word (left) and one at the end (right)
  // Iterate through the word while left pointer is less than or equal to the right pointer
  //   If the characters at the left and right pointers are not equal, return false
  //   Move the left pointer to the right
  //   Move the right pointer to the left
  // If the loop completes without finding any unequal characters, return true (the word is a palindrome)
  word = word.toLowerCase();
  let left = 0;
  let right = word.length - 1;
  
  while (left <= right) {
      if (word[left] !== word[right]) {
          return false;
      }
      left++;
      right--;
  }
  return true;
}

/*
  Pseudocode:
  Convert the input word to lowercase.
  Initialize left pointer at the start of the word and right pointer at the end of the word.
  Iterate through the word while left pointer is less than or equal to right pointer.
     a. If characters at the left and right pointers are not equal, return false.
     b. Move left pointer to the right.
     c. Move right pointer to the left.
  If the loop completes without finding any unequal characters, return true (word is a palindrome).

  Explanation:
  This function takes a word as input, converts it to lowercase for case-insensitive comparison, and then uses two pointers to iterate through the word. At each iteration, it compares characters at the left and right pointers. If any pair of characters is not equal, it returns false, indicating that the word is not a palindrome. If the loop completes without finding any unequal characters, it returns true, indicating that the word is a palindrome.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
