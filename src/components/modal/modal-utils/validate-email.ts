export function validateEmail(input: HTMLInputElement): boolean {
  let isValid = true;
  const emailValue = input.value;
  if (emailValue.length === 0) {
    isValid = false;
  }
  const regEx = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
  if (!regEx.test(emailValue)) {
    isValid = false;
  }
  return isValid;
}
