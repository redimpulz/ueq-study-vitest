import { describe, test, expect, beforeEach } from "vitest";
import { Calculator } from "../script_class";

describe("Calculatorのテスト", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("足し算ができる", () => {
    const result = calculator.add(3, 5);
    expect(result).toBe(8);
  });

  test("引き算ができる", () => {
    const result = calculator.subtract(10, 4);
    expect(result).toBe(6);
  });
});
