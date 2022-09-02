export enum FileNames {
  CODE = "sample.js",
  TEST = "sample.test.js",
}

export const codeFileContent = `
'use strict';

function sum(a, b) {
  return a + b;
}

module.exports = { sum };
`.trim();

export const testingFileContent = `
'use strict';

const { sum } = require('./sample.js');

test('should return proper result', () => {
  expect().toBe();
});
`.trim();
