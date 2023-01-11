export function validateAdress(input: HTMLInputElement): boolean {
  let isValid = true;
  const adressValue = input.value;
  if (adressValue.length === 0) {
    isValid = false;
  }
  const adressArr = adressValue.split(' ');
  if (adressArr.length < 3) {
    isValid = false;
  }
  adressArr.forEach((adress) => {
    if (adress.length < 5) {
      isValid = false;
    }
  });
  return isValid;
}
