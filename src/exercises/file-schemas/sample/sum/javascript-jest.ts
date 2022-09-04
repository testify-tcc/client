export enum FileNames {
  CODE = "sum.js",
  TEST = "sum.test.js",
}

export const codeFileContent = `
'use strict';

function sum(a, b) {
  return a + b;
}

module.exports = { sum };
`.trim();

export const testingFileContent = `
const { sum } = require('./sum.js');

'use strict';

test('should return proper result', () => {
  expect().toBe();
});
`.trim();
