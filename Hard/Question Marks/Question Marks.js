function QuestionsMarks(str) { 
    // Split string in array
    let chars = str.split("");
  
    // Define number start, first number, and question marks count
    let count = 0;
    let start = false;
    let first = 0;
  
    // Iterate through array
    for (let i = 0; i < chars.length; i++) {
      // If character is a number
      if (parseInt(chars[i]) >= 0 && parseInt(chars[i]) <= 9) {
        // If counted 3 question marks, and the sum of the first and current numbers is 10,
        // return true
        if (start && count == 3 && first + parseInt(chars[i]) == 10) {
          return true;
        }
        // Else, keep the number to keep checking
        first = parseInt(chars[i]);
        // and start counting
        start = true;
      }
      // If started counting and the current character is a question mark, add 1 to the count
      if (start && chars[i] == '?') {
        count++;
      }
      // If there are more than three questions marks between two numbers, restart the count
      if (count > 3) {
        count = 0;
      }
    }
  
    return false; 
  }
     
  console.log(QuestionsMarks("acc?7???3sss?3rr1??????5")); // true
  console.log(QuestionsMarks("aa6?9")); // false