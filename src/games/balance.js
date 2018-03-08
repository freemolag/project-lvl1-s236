import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'Balance the given number.';
const length = str => str.length;
const gamePlay = () => {
  const randomNumber = (Math.floor(Math.random() * 1000)) + 10;
  const len = length(String(randomNumber));
  let result = '';
  const arr = Array.from(String(randomNumber)).map(Number);
  const total = arr.reduce((a, b) => a + b, 0);
  const rest = total % len;
  const minDigit = String((total - rest) / len);
  const digit = minDigit.repeat(len);
  const first = digit.slice(0, len - rest);
  const second = digit.slice(len - rest, len);
  for (let j = 0; j < rest; j += 1) {
    result += String(Number(second[j]) + 1);
  } return cons(randomNumber, first + result);
};

const startEven = () => gameInterface(gameRules, gamePlay);

export default startEven;
