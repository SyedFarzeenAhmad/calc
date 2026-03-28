export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new RangeError("Division by zero");
  return a / b;
}

export function power(a: number, b: number): number {
  return a ** b;
}

export function floor(a: number): number {
  if (a >= 0) return a | 0;
  return (a | 0) - 1;
}

export function ceil(a: number): number {
  if (a >= 0) return (a | 0) + 1;
  return a | 0;
}

export function absolute(a: number): number {
  if (a >= 0) return a;
  return -a;
}
