export type UnaryFn = (x: number) => number;

// Numerical derivative scaffold (you choose h and method)
export function derivative(_fn: UnaryFn, _x: number, _h = 1e-5): number {
  void _fn;
  void _x;
  void _h;
  throw new Error("TODO: implement derivative using finite differences");
}

// Numerical integral scaffold (you choose trapezoid/simpson)
export function integral(
  _fn: UnaryFn,
  _a: number,
  _b: number,
  _steps = 1000,
): number {
  void _fn;
  void _a;
  void _b;
  void _steps;
  throw new Error("TODO: implement integral using numerical method");
}
