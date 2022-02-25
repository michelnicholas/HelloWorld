// You will write a card counting function. It will receive a card parameter, which can be a number or a string,
// and increment or decrement the global count variable according to the card's value (see table). 
// The function will then return a string with the current count and the string Bet if the count is positive,
// or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Count Change	Cards
// +1	2, 3, 4, 5, 6
//  0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

let count = 0;

function cc(card) {
  // Only change code below this line
  if(  card == 2 || card == 3 || card == 4 || card == 5 || card == 6 ){
    count++;
   } else if (card == 7 || card == 8 || card == 9) {
         count += 0;
     }
     else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
         count -= 1;
    }
     if (count <= 0) {
         return String(count) + " Hold";
     }
     else {
         return String(count) + " Bet";
     }

 
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');