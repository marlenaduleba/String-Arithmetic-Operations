const { plus, minus, multiply, divide } = require("./arithmeticOperations");

// Adding
test("adds two positive numbers correctly", () => {
  expect("123".plus("456")).toBe("579");
});

test("handles carry correctly", () => {
  expect("999".plus("1")).toBe("1000");
});

test("handles addition of large numbers", () => {
  expect("999999999999999999".plus("1")).toBe("1000000000000000000");
});

// Substracting
test("subtracts two positive numbers correctly", () => {
  expect("579".minus("456")).toBe("123");
});

test("handles borrowing correctly", () => {
  expect("1000".minus("1")).toBe("999");
});

test("handles subtraction of large numbers", () => {
  expect("1000000000000000000".minus("1")).toBe("999999999999999999");
});

// Multiplying
test("multiplies two positive numbers correctly", () => {
  expect("123".multiply("456")).toBe("56088");
});

test("handles multiplication with zero correctly", () => {
  expect("999".multiply("0")).toBe("0");
});

test("handles multiplication of large numbers", () => {
  expect("123456789".multiply("987654321")).toBe("121932631112635269");
});

// Dividing
test("divides two positive numbers correctly", () => {
  expect("579".divide("123")).toBe("4");
});

test("handles division with remainder correctly", () => {
  expect("1000".divide("123")).toBe("8");
});

test("handles division of large numbers", () => {
  expect("123456789".divide("456")).toBe("270738");
});
