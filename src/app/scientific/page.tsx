"use client";

import { useMemo, useState } from "react";
import {
  absolute,
  add,
  ceil,
  divide,
  floor,
  multiply,
  power,
  subtract,
} from "@/engine/basic";
import { factorial } from "@/engine/advanced";
import { sin, cos, tan } from "@/engine/trig";

type Operation =
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "power"
  | "factorial"
  | "absolute"
  | "floor"
  | "ceil"
  | "sin"
  | "cos"
  | "tan";

const unaryOps: Operation[] = ["factorial", "absolute", "floor", "ceil"];

const operationLabels: Record<Operation, string> = {
  add: "a + b",
  subtract: "a - b",
  multiply: "a * b",
  divide: "a / b",
  power: "a ^ b",
  factorial: "a!",
  absolute: "abs(a)",
  floor: "floor(a)",
  ceil: "ceil(a)",
  sin: "sin(a)",
  cos: "cos(a)",
  tan: "tan(a)",
};

export default function Scientific() {
  const [aInput, setAInput] = useState("0");
  const [bInput, setBInput] = useState("0");
  const [operation, setOperation] = useState<Operation>("add");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isUnary = useMemo(() => unaryOps.includes(operation), [operation]);

  const runCalculation = () => {
    setError("");

    const a = Number(aInput);
    const b = Number(bInput);

    if (Number.isNaN(a) || (!isUnary && Number.isNaN(b))) {
      setResult("");
      setError("Please enter valid numbers.");
      return;
    }

    try {
      let value: number;

      switch (operation) {
        case "add":
          value = add(a, b);
          break;
        case "subtract":
          value = subtract(a, b);
          break;
        case "multiply":
          value = multiply(a, b);
          break;
        case "divide":
          value = divide(a, b);
          break;
        case "power":
          value = power(a, b);
          break;
        case "factorial":
          value = factorial(a);
          break;
        case "absolute":
          value = absolute(a);
          break;
        case "floor":
          value = floor(a);
          break;
        case "ceil":
          value = ceil(a);
          break;
        case "sin":
          value = sin(a);
          break;
        case "cos":
          value = cos(a);
          break;
        case "tan":
          value = tan(a);
          break;
        default:
          value = a;
      }

      setResult(String(value));
    } catch (err) {
      setResult("");
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Calculation failed.");
      }
    }
  };

  const reset = () => {
    setAInput("0");
    setBInput("0");
    setOperation("add");
    setResult("");
    setError("");
  };

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-8">
      <section className="mx-auto max-w-lg rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-neutral-900">Scientific Test Bench</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Use this page to manually test engine functions while you build them.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-neutral-700">Input A</span>
            <input
              className="rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-500"
              value={aInput}
              onChange={(e) => setAInput(e.target.value)}
              placeholder="e.g. 2.5"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-neutral-700">Input B</span>
            <input
              className="rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-500 disabled:bg-neutral-100"
              value={bInput}
              onChange={(e) => setBInput(e.target.value)}
              placeholder="e.g. 4"
              disabled={isUnary}
            />
          </label>
        </div>

        <label className="mt-4 flex flex-col gap-1">
          <span className="text-sm font-medium text-neutral-700">Operation</span>
          <select
            className="rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-500"
            value={operation}
            onChange={(e) => setOperation(e.target.value as Operation)}
          >
            {(Object.keys(operationLabels) as Operation[]).map((op) => (
              <option key={op} value={op}>
                {operationLabels[op]}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-6 flex items-center gap-3">
          <button
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            onClick={runCalculation}
          >
            Run
          </button>
          <button
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
            onClick={reset}
          >
            Reset
          </button>
        </div>

        <div className="mt-6 rounded-md border border-neutral-200 bg-neutral-50 p-3">
          <p className="text-xs uppercase tracking-wide text-neutral-500">Result</p>
          <p className="mt-1 font-mono text-lg text-neutral-900">{result || "-"}</p>
          {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
        </div>
      </section>
    </main>
  );
}