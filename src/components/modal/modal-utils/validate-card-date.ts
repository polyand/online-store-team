export function validateCardDate(input: HTMLInputElement): boolean {
  let isValid = true;
  const cardDateValue = input.value;
  if (cardDateValue.length === 0 || cardDateValue.length < 5) {
    isValid = false;
  }
  const regEx = /^[\d/]+$/;
  if (!regEx.test(cardDateValue)) {
    isValid = false;
  }
  const dateArr = cardDateValue.split('/');
  if (dateArr[0] === '00' || +dateArr[0] > 12) {
    isValid = false;
  }
  if (dateArr[1] === '00' || +dateArr[1] < 22 || +dateArr[1] > 30) {
    isValid = false;
  }
  return isValid;
}
