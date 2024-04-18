import { describe, test, expect, vi } from "vitest";
import { func1, func2, obj, func3 } from "../script_mock";

describe("func1のテスト", () => {
  test("モックした関数が呼ばれる", () => {
    const mockFunction = vi.fn();
    func1(3, 5, mockFunction);
    expect(mockFunction).toHaveBeenCalledWith(8);
  });
});

describe("func2のテスト", () => {
  test("モックしたオブジェクトのメソッドが呼ばれる", () => {
    const spy = vi.spyOn(obj, "f");
    func2(3, 5);
    expect(spy).toHaveBeenCalledWith(8);
    // const spy = vi.spyOn(global.console, "log");
  });
});

describe("func3のテスト", () => {
  test("モックしたモジュールが使われる", () => {
    vi.mock("../calc", () => {
      return {
        multi: () => 10,
      };
    });
    expect(func3(3, 5)).toBe(10);
  });
});
