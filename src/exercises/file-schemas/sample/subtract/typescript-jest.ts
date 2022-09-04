export enum FileNames {
  CODE = "subtract.ts",
  TEST = "subtract.test.ts",
}

export const codeFileContent = `
'use strict';

export function subtract(a: number, b: number): number {
  return a - b;
}
`.trim();

export const testingFileContent = `
import { subtract } from './subtract';

'use strict';

test('should return proper result', () => {
  expect().toBe(1);
});
`.trim();
