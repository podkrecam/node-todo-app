"use strict";

const {
  calcTip,
  fahrenheitToCelsius,
  celsiusTofahrenheit,
  add,
} = require("../src/math");

// test("Hello World", () => {});

// test("This should fail", () => {
//   throw new Error("Failure");
// });

test("Should calculate total with tip", () => {
  const total = calcTip(10, 0.3);
  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calcTip(10);
  expect(total).toBe(12);
});

test("Should convert 32F to 0C", () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test("Should convert 0C to 32F", () => {
  const temp = celsiusTofahrenheit(0);
  expect(temp).toBe(32);
});

// test("Async code test", (done) => {
//   setTimeout(() => {
//     try {
//       expect(1).toBe(2);
//       done();
//     } catch (e) {
//       done(e);
//     }
//   }, 2000);
// });

test("Should add two numbers", (done) => {
  try {
    add(2, 3).then((sum) => {
      expect(sum).toBe(5);
      done();
    });
  } catch (error) {
    done(error);
  }
});

test("Should add two numbers async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
/*
Why test?

- Saves time
- Creates reliable software
- Gives flexibility to developers
  - Refactoring
  - Collaborating
  - Profiling
- Peace of mind
*/
