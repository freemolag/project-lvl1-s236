import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'What is the result of the expression?';
const gamePlay = () => {
  const randomNumOne = Math.floor(Math.random() * 100);
  const randomNumTwo = Math.floor(Math.random() * 10);
  const randomNumOperator = Math.floor(Math.random() * 100);
  let operator = '';
  let answer;
  if (randomNumOperator < 33) {
    operator = '+';
    answer = randomNumOne + randomNumTwo;
  } else if (randomNumOperator > 66) {
    operator = '-';
    answer = randomNumOne - randomNumTwo;
  } else {
    operator = '*';
    answer = randomNumOne * randomNumTwo;
  }
  const expression = `${randomNumOne} ${operator} ${randomNumTwo}`;
  const isEqual = String(answer);
  return cons(expression, isEqual);
};
const startCalc = () => gameInterface(gameRules, gamePlay);

export default startCalc;
