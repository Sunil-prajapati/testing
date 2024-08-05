import sum from "./sum";

test("testing for sum function", () => {
  const a = 2;
  const b = 4;
  const result = 6;
  expect(sum(a, b)).toBe(result);
});
