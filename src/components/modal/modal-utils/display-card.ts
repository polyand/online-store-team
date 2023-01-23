function displayCardNum(input: HTMLInputElement): void {
  if (input.value.length % 5 === 0 && input.value[input.value.length - 1] !== ' ' && input.value.length !== 0) {
    const numArr = input.value.split('');
    numArr.splice(numArr.length - 1, 0, ' ');
    input.value = numArr.join('');
  }
  if (input.value.length > 19) {
    input.value = input.value.slice(0, input.value.length - 2);
  }
}

function displayCardDate(input: HTMLInputElement): void {
  if (input.value.length === 3 && input.value[2] !== '/') {
    const numArr = input.value.split('');
    numArr.splice(numArr.length - 1, 0, '/');
    input.value = numArr.join('');
  }
  if (input.value.length > 5) {
    input.value = input.value.slice(0, input.value.length - 1);
  }
}

function displayCardCvv(input: HTMLInputElement): void {
  if (input.value.length > 3) {
    input.value = input.value.slice(0, input.value.length - 1);
  }
}

export function displayCard(event: Event) {
  const input = event.target;
  if (input instanceof HTMLInputElement) {
    switch (input.id) {
      case 'cardNum':
        displayCardNum(input);
        break;
      case 'cardDate':
        displayCardDate(input);
        break;
      case 'cardCvv':
        displayCardCvv(input);
        break;
    }
  }
}
