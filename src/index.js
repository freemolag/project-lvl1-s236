import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameInterface = (gameRules, generateQuestion) => {
  console.log(`Welcome to the Brain Games!\n${gameRules}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const pair = generateQuestion(car, cdr);
    const userAnswer = readlineSync.question(`Question: ${car(pair)}\nYour answer: `);
    if (userAnswer === cdr(pair)) {
      console.log('Correct!\n');
    } else {
      console.log('Wrong!\n');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameInterface;
