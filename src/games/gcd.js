
import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'Find the greatest common divisor of given numbers.';
const gamePlay = () => {
  const randomNumOne = Math.floor(Math.random() * 10);
  const randomNumTwo = Math.floor(Math.random() * 10);
  const divider = Math.floor(Math.random() * 10);
  const numOne = randomNumOne * divider;
  const numTwo = randomNumTwo * divider;
  const expression = `${numOne} ${numTwo}`;
  const isEqual = String(divider);
  return cons(expression, isEqual);
};

const startGcd = () => gameInterface(gameRules, gamePlay);

export default startGcd;
