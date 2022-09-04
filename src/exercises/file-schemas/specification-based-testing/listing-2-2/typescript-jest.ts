export enum FileNames {
  CODE = "listing-2-2.ts",
  TEST = "listing-2-2.test.ts",
}

export const codeFileContent = `
'use strict';

export function substringsBetween(str: string | null, open: string, close: string): string[] | null {
  if (str === null || open === null || close === null) {
    return null;
  }

  const strLen = str.length;
  const openLen = open.length;
  const closeLen = close.length;

  if (closeLen === 0 || openLen === 0) {
    return null;
  }

  if (strLen === 0) {
    return [];
  }

  const list = [];

  let pos = 0;

  while (pos < strLen - closeLen) {
    let start = str.indexOf(open, pos);

    if (start < 0) {
      break;
    }

    start += openLen;
    let end = str.indexOf(close, start);

    if (end < 0) {
      break;
    }

    list.push(str.substring(start, end));
    pos = end + closeLen;
  }

  if (list.length === 0) {
    return null;
  }

  return list;
}
`.trim();

export const testingFileContent = `
import { substringsBetween } from './listing-2-2';

'use strict';

describe('should return proper result', () => {
  // Write a test case that's easy to understand and has simple results
  it('simple case', () => {
    expect().toEqual(["bc"]);
  });

  // This test case should test whether the function works properly
  // when multiple substrings should be retuned
  it('should return multiple substrings', () => {
    expect().toEqual(["bc", "bc"]);
  });

  // This test case verifies the function correctness when
  // there's more than one character in the open and close tags
  it('open and close tags that are longer than one char', () => {
    expect().toEqual(["bc", "bf"]);
  });
});
`.trim();
