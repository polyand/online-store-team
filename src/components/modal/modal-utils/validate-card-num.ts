export function validateCardNum(input: HTMLInputElement): boolean {
  let isValid = true;
  const cardNumValue = input.value;
  if (cardNumValue.length === 0 || cardNumValue.length < 19) {
    isValid = false;
  }
  const regEx = /^[\d  ]+$/;
  if (!regEx.test(cardNumValue)) {
    isValid = false;
  }
  return isValid;
}
