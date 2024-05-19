import { sum } from "../sum";
//const { sum } = require("../sum");

test("test the sum function of addtion of two numbers", () => {
  const result = sum(3, 4);
  //   //Assertion
  expect(result).toBe(7);
});
