export const ENGINE_ROADMAP = {
  arithmetic: [
    "basic: add, subtract, multiply, divide",
    "advanced: power (iterative), root (Newton-Raphson), logs (series)",
    "number tools: modulo, gcd, lcm, absolute, floor, ceil",
  ],
  trigonometry: [
    "angle helpers: degToRad, radToDeg, normalizeAngle",
    "primary: sin, cos, tan via Taylor + range reduction",
    "reciprocal: sec, csc, cot",
    "inverse: asin, acos, atan via iterative approximation",
    "hyperbolic: sinh, cosh, tanh using custom exp",
  ],
  calculus: [
    "numerical derivative: forward/backward/central difference",
    "numerical integration: rectangle, trapezoid, Simpson",
    "future: Newton method root solver utility",
  ],
  parserAndEvaluation: [
    "tokenizer",
    "parser (AST)",
    "evaluator with precedence and function calls",
    "error model and debug traces",
  ],
} as const;
