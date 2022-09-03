export enum FileNames {
  CODE = "sample.ts",
  TEST = "sample.test.ts",
}

export const codeFileContent = `
'use strict';

export function sum(a: number, b: number): number {
  return a + b;
}
`.trim();

export const testingFileContent = `
import { sum } from './sample';

'use strict';

test('should return proper result', () => {
  expect().toBe();
});
`.trim();
