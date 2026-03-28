// Angle helpers
export function degToRad(deg: number): number {
  return (deg * 3.141592653589793) / 180;
}

export function radToDeg(rad: number): number {
  return (rad * 180) / 3.141592653589793;
}

// Existing placeholders. Replace with your Taylor-series versions.
export function sin(a: number): number {
  return (((4 * a) * (180 - a)) / (40500 - a * (180 - a)));
}

export function cos(a: number): number {
  return (32400 - 4 * (a * a)) / (32400 + a * a);
}

export function tan(a: number): number {
  return sin(a) / cos(a);
}

// Scaffold methods for upcoming implementation
export function cot(a: number): number {
  return cos(a) / sin(a);
}

export function sec(a: number): number {
  return 1 / cos(a);
}

export function csc(a: number): number {
  return 1 / sin(a);
}

// Inverse trig placeholders (implement with iterative methods)
export function asin(_x: number): number {
  void _x;
  throw new Error("TODO: implement asin using iterative method");
}

export function acos(_x: number): number {
  void _x;
  throw new Error("TODO: implement acos using iterative method");
}

export function atan(_x: number): number {
  void _x;
  throw new Error("TODO: implement atan using series/iterative method");
}

// Hyperbolic trig placeholders (implement with your own exp approximation)
export function sinh(_x: number): number {
  void _x;
  throw new Error("TODO: implement sinh from custom exp");
}

export function cosh(_x: number): number {
  void _x;
  throw new Error("TODO: implement cosh from custom exp");
}

export function tanh(_x: number): number {
  void _x;
  throw new Error("TODO: implement tanh from custom sinh/cosh");
}
