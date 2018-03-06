import readlineSync from 'readline-sync';

export const intro = console.log('Welcome to the Brain Games!');
export const rule = console.log('Answer "yes" if number even otherwise answer "no".');
export const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
export const brainEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const max = 100;
    const randomNumber = Math.floor(Math.random() * max);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEvenNumber = () => randomNumber % 2 === 0;
    const expectedAnswer = isEvenNumber() ? 'yes' : 'no';
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log('Wrong!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
