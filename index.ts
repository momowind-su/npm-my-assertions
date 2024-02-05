
// my-assertions/index.ts
export function assertEqual(actual: any, expected: any, message: string = 'Assertion failed'): string {
  if (actual !== expected) {
    return `${message} - Expected: ${expected}, Actual: ${actual}`;
  }
  return `Assertion passed - Expected: ${expected}, Actual: ${actual}`;
}

export function assertDeepEqual(actual: any, expected: any, message: string = 'Deep equality assertion failed'): string {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);

  if (actualStr !== expectedStr) {
    return `${message} - Expected: ${expectedStr}, Actual: ${actualStr}`;
  }
  return `Deep equality assertion passed - Expected: ${expectedStr}, Actual: ${actualStr}`;
}

export function assertObjectContains(actual: Record<string, any>, expected: Record<string, any>, message: string = 'Object contains assertion failed'): string {
  for (const key in expected) {
    if (expected.hasOwnProperty(key)) {
      if (actual[key] !== expected[key]) {
        return `${message} - Property '${key}' mismatch - Expected: ${expected[key]}, Actual: ${actual[key]}`;
      }
    }
  }
  return 'Object contains assertion passed';
}

