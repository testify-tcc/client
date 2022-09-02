export const javascriptJestCodeFileContent = `
'use strict';

function sum(a, b) {
  return a + b;
}

module.exports = { sum };
`.trim();

export const javascriptJestTestingFileContent = `
'use strict';

const { sum } = require('./sample.js');

test('should return proper result', () => {
  expect().toBe();
});
`.trim();
