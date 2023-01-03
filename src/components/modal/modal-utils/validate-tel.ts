export function validateTel(input: HTMLInputElement): boolean {
  let isValid = true;
  const telValue = input.value;
  if (telValue.length === 0 || telValue[0] !== '+' || telValue.length < 10) {
    isValid = false;
  }
  const regEx = /^[\d +]+$/;
  if (!regEx.test(telValue)) {
    isValid = false;
  }
  return isValid;
}
