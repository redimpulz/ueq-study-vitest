import { multi } from "./calc";

export const func1 = (a, b, f) => {
  f(a + b);
};

export const obj = {
  f: (v) => console.log(v),
};

export const func2 = (a, b) => {
  obj.f(a + b);
};

export const func3 = (a, b) => {
  return multi(a, b);
};
