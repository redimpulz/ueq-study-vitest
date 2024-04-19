import { describe, test, expect } from "vitest";
import { add, subtract, getObj, getArr } from "../script_func";

describe("add関数のテスト", () => {
  test("引数を足し算する", () => expect(add(3, 5)).toBe(8));
});

describe("substruct関数のテスト", () => {
  test("引数を引き算する", () => expect(subtract(10, 4)).toBe(6));
});

describe("getObj関数のテスト", () => {
  test("オブジェクトが等しい", () =>
    expect(getObj()).toEqual({
      id: 1,
      name: "hoge",
    }));
});

describe("getArr関数のテスト", () => {
  test("配列に1を含む", () => expect(getArr()).toContain(3));
});
