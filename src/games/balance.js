import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { randomNumber } from '../random';

const gameRules = 'Balance the given number.';
const length = str => str.length;

const findBalance = (num) => {
  const numbers = `${num}`.split('').map(x => Number(x));
  const total = numbers.reduce(((a, b) => a + b), 0);
  const average = Math.floor(total / length(numbers));
  const remainder = total % length(numbers);
  const newArr = numbers.slice().fill(average);
  if (remainder === 0) {
    return newArr.join('');
  }
  return newArr.fill(average + 1, length(newArr) - remainder, length(newArr)).join('');
};

const generateQuestion = () => {
  const random = randomNumber() * 13;
  const correctAnswer = findBalance(random);
  return cons(random, correctAnswer);
};

const startBalance = () => gameInterface(gameRules, generateQuestion);

export default startBalance;
