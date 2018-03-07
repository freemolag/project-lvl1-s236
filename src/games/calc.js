import { cons } from 'hexlet-pairs';
import gameInterface from '..';

const gameRules = 'What is the result of the expression?';
const gamePlay = () => {
  const randomNumOne = Math.floor(Math.random() * 100);
  const randomNumTwo = Math.floor(Math.random() * 10);
  const randomNumOperator = Math.floor(Math.random() * 100);
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
const startCalc = () => gameInterface(gameRules, gamePlay);

export default startCalc;
