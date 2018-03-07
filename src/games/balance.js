import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'Balance the given number.';
const length = str => str.length;
const gamePlay = () => {
  const randomNumber = (Math.floor(Math.random() * 1000)) + 10;
  const str = String(randomNumber);
  let summ = 0;
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    summ += Number(str[i]);
  }
  const rest = summ % length(str);
  const minDigit = String((summ - rest) / length(str));
  const Digit = minDigit.repeat(length(str));
  const first = Digit.slice(0, length(str) - rest);
  const second = Digit.slice(length(str) - rest, length(str));
  for (let j = 0; j < length(second); j += 1) {
    result += Number(second[j]) + 1;
  } return cons(randomNumber, first + result);
};

const startEven = () => gameInterface(gameRules, gamePlay);

export default startEven;
