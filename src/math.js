"use strict";

const calcTip = (total, tipPercent = 0.2) => total * (1 + tipPercent);

const fahrenheitToCelsius = (temp) => (temp - 32) / 1.8;

const celsiusTofahrenheit = (temp) => temp * 1.8 + 32;

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be non-negative");
      }
      resolve(a + b);
    }, 2000);
  });
};

module.exports = {
  calcTip,
  fahrenheitToCelsius,
  celsiusTofahrenheit,
  add
};
