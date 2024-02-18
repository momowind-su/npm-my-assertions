import { an } from './an';
export class toBe {

  public an = new an();

  public equals(actual: any, expected: any): string {
    if (actual !== expected) {
      return `Assertion failed - Expected: ${expected}, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: ${expected}, Actual: ${actual}`;
    }
  }
  public notEquals(actual: any, expected: any): string {
    if (actual === expected) {
      return `Assertion failed - Expected: ${expected}, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: ${expected}, Actual: ${actual}`;
    }
  }
  public inRange(actual: number, range_a: number, range_b: number): string {
    if (actual < range_a || actual > range_b) {
      return `Deep equality within range assertion failed - Values are not deeply equal within the specified range`;
    } else {
      return `Deep equality within range assertion passed - Values are deeply equal within the specified range`;
    }
  }
  public a(actual: any, type: string): string {
    if (typeof actual !== type) {
      return `Assertion failed - Expected: ${type}, Actual: ${typeof actual}`;
    } else {
      return `Assertion passed - Expected: ${type}, Actual: ${typeof actual}`;
    }
  }

  public true(actual: boolean): string {
    if (actual !== true) {
      return `Assertion failed - Expected: true, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: true, Actual: ${actual}`;
    }
  }

  public false(actual: boolean): string {
    if (actual !== false) {
      return `Assertion failed - Expected: false, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: false, Actual: ${actual}`;
    }
  }

  public undefined(actual: any): string {
    if (actual !== undefined) {
      return `Assertion failed - Expected: undefined, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: undefined, Actual: ${actual}`;
    }
  }

  public null(actual: any): string {
    if (actual !== null) {
      return `Assertion failed - Expected: null, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: null, Actual: ${actual}`;
    }
  }
  public NaN(actual: any): string {
    if (!isNaN(actual)) {
      return `Assertion failed - Expected: NaN, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: NaN, Actual: ${actual}`;
    }
  }

  public empty(actual: any): string {
    if (actual.length !== 0) {
      return `Assertion failed - Expected: empty, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: empty, Actual: ${actual}`;
    }
  }

  public notEmpty(actual: any): string {
    if (actual.length === 0) {
      return `Assertion failed - Expected: not empty, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: not empty, Actual: ${actual}`;
    }
  }

  public instanceOf(actual: any, expected: any): string {
    if (!(actual instanceof expected)) {
      return `Assertion failed - Expected: ${expected}, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: ${expected}, Actual: ${actual}`;
    }
  }

  private isArgumentsObject(value: any): boolean {
    return Object.prototype.toString.call(value) === '[object Arguments]';

  }
  public arguments(actual: any): string {
    if (!this.isArgumentsObject) {
      return `Assertion failed - Expected: arguments, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: arguments, Actual: ${actual}`;
    }
  }

  public above(actual: number, expected: number): string {
    if (actual <= expected) {
      return `Assertion failed - Expected: ${expected}, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: ${expected}, Actual: ${actual}`;
    }
  }

  public below(actual: number, expected: number): string {
    if (actual >= expected) {
      return `Assertion failed - Expected: ${expected}, Actual: ${actual}`;
    } else {
      return `Assertion passed - Expected: ${expected}, Actual: ${actual}`;
    }
  }
}
