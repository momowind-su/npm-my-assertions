export class an {
  public array_empty(actual: any): string {
    if (actual.length !== 0) {
      return `Assertion failed - Expected: empty, Actual: ${actual.length}`;
    } else {
      return `Assertion passed - Expected: empty, Actual: ${actual.length}`;
    }
  }

  public array_notEmpty(actual: any): string {

    if (actual.length == 0) {
      return `Assertion failed - Expected: not empty, Actual: ${actual.length}`;
    } else {
      return `Assertion passed - Expected: not empty, Actual: ${actual.length}`;
    }
  }

  public array_that_does_not_include(actual: any, expected: any): string {
    if (!actual.includes(expected)) {
      return `Assertion failed - Expected array: ${actual} to not include: ${expected}`;
    } else {
      return `Assertion passed - Expected array: ${actual} to not include: ${expected} `;
    }
  }

  public array_that_includes(actual: any, expected: any): string {
    if (!actual.includes(expected)) {
      return `Assertion failed - Expected array ${actual} to include: ${expected}`;
    } else {
      return `Assertion passed - Expected array: ${actual} to include ${expected}`;
    }
  }
}
