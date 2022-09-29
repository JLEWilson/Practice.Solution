//return true if the second argument
//is higher and within 6 of the first argument]

const possibleBonus = (player1Pos, player2Pos) => {
  if (player1Pos < 1 || player2Pos < 1) return false;
  return player2Pos > player1Pos && player2Pos - player1Pos <= 6;
};

console.log(possibleBonus(3, 7)); // true

console.log(possibleBonus(1, 9)); // false

console.log(possibleBonus(5, 3)); // false
