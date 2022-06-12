const answerElement = document.querySelector('#answer');

const answer = [
  'For sure!',
  `I'm not sure.`,
  `Don't count on that.`,
  'No doubt!',
  'Ask again later.',
  'Yes, definitely!',
  'My response is no.',
  'You can count on that.',
  'Better not tell you yet.',
  'I think so.',
  'My sources tell me not so.',
  'Probably.',
  `It's not possible to predict it now.`,
  'Yes.',
  'Focus and ask again.'
];

function response() {
  const totalAnswer = answer.length;
  const randomNumber = Math.floor(Math.random() * totalAnswer);
  console.log(randomNumber);
}
