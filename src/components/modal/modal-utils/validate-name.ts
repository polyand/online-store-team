export function validateName(input: HTMLInputElement): boolean {
  let isValid = true;
  const nameValue = input.value;
  if (nameValue.length === 0) {
    isValid = false;
  }
  const namesArr = nameValue.split(' ');
  if (namesArr.length < 2) {
    isValid = false;
  }
  namesArr.forEach((name) => {
    if (name.length < 3) {
      isValid = false;
    }
  });
  return isValid;
}
