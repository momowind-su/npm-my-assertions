
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

export function assertDeepInRange(
  actual: any,
  expected: any,
  range: number,
  message: string = 'Deep equality within range assertion failed'
): string {
  const isDeepEqualWithinRange = deepEqualWithinRange(actual, expected, range);

  if (!isDeepEqualWithinRange) {
    return `${message} - Values are not deeply equal within the specified range`;
  }

  return `Deep equality within range assertion passed - Values are deeply equal within the specified range`;

  function deepEqualWithinRange(objA: any, objB: any, currentRange: number): boolean {
    if (currentRange < 0) {
      return false;  // Stop recursion when range is exhausted
    }

    if (typeof objA !== 'object' || typeof objB !== 'object') {
      return objA === objB;  // Base case: compare primitive values
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;  // Different number of properties
    }

    for (const key of keysA) {
      if (!keysB.includes(key)) {
        return false;  // Property missing in objB
      }

      if (!deepEqualWithinRange(objA[key], objB[key], currentRange - 1)) {
        return false;  // Recursively check nested properties
      }
    }

    return true;
  }
}
