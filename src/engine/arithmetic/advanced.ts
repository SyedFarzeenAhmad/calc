export function factorial(n: number): number {
  if (!Number.isInteger(n)) throw new RangeError("factorial expects an integer");
  if (n < 0) throw new RangeError("factorial is undefined for negative numbers");
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

// You can place future arithmetic functions here, for example:
// gcd, lcm, modulo, permutations, combinations.
