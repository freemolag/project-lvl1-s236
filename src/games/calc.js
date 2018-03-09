import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { randomNumber } from '../random';

const gameRules = 'What is the result of the expression?';
const generateQuestion = () => {
  const randomNumOne = randomNumber();
  const randomNumTwo = randomNumber();
  const randomNumOperator = randomNumber();
  let operator = '';
  let mathAnswer;
  if (randomNumOperator < 33) {
    operator = '+';
    mathAnswer = randomNumOne + randomNumTwo;
  } else if (randomNumOperator > 66) {
    operator = '-';
    mathAnswer = randomNumOne - randomNumTwo;
  } else {
    operator = '*';
    mathAnswer = randomNumOne * randomNumTwo;
  }
  const gameQuestion = `${randomNumOne} ${operator} ${randomNumTwo}`;
  const userAnswer = String(mathAnswer);
  return cons(gameQuestion, userAnswer);
};
const startCalc = () => gameInterface(gameRules, generateQuestion);

export default startCalc;
