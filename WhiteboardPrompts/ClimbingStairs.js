//You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps.
//In how many distinct ways can you climb to the top?
//1 <= n <= 45
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let optionsForClimbing;
  let num1 = 1;
  let num2 = 2;
  for (let i = 3; i <= n; i++) {
    optionsForClimbing = num1 + num2;
    num1 = num2;
    num2 = optionsForClimbing;
  }
  return optionsForClimbing;
};
