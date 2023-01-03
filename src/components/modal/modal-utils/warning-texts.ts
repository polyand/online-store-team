import { WarningMessages } from 'utils/types';

export const warningMsg: WarningMessages = {
  name: 'Name must include 2 or more words, 3 or more chars each!',
  tel: 'Tel must start with "+" and include 9 or more numbers!',
  adress: 'Adress must include 3 or more words, 5 or more chars each!',
  email: 'Must be a valid E-mail adress!',
  cardNum: 'Card number must include only numbers, 16 chars only!',
  cardDate: 'Enter a valid month and year of card expires date!',
  cardCvv: 'CVV must include only numbers, 3 chars only!',
};
