// Checking if element is in array
export function containsElement<T>(array: T[], element: T): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

// Adding element to array
export function addElement<T>(array: T[], element: T): void {
  array.push(element);
}

// Removing element from array
export function removeElement<T>(array: T[], element: T): void {
  const position: number = array.indexOf(element);
  array.splice(position, 1);
}

// Sorting elements
export function compareNumeric(a: number, b: number): number {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
