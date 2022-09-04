export enum FileNames {
  CODE = "subtract.js",
  TEST = "subtract.test.js",
}

export const codeFileContent = `
'use strict';

function subtract(a, b) {
  return a - b;
}

module.exports = { subtract };
`.trim();

export const testingFileContent = `
const { subtract } = require('./subtract.js');

'use strict';

test('should return proper result', () => {
  expect().toBe();
});
`.trim();
