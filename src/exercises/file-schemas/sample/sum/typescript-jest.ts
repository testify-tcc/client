export enum FileNames {
  CODE = "sum.ts",
  TEST = "sum.test.ts",
}

export const codeFileContent = `
'use strict';

export function sum(a: number, b: number): number {
  return a + b;
}
`.trim();

export const testingFileContent = `
import { sum } from './sum';

'use strict';

test('should return proper result', () => {
  expect().toBe(2);
});
`.trim();
