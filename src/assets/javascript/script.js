const inputQuestion = document.querySelector('#inputQuestion');
const answerElement = document.querySelector('#answer');
const modal = document.getElementById('modal');

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
  if (inputQuestion.value != '') {
    const totalAnswer = answer.length;
    const randomNumber = Math.floor(Math.random() * totalAnswer);

    document.getElementById('question').innerHTML = inputQuestion.value;
    answerElement.innerHTML = answer[randomNumber];

    modal.classList.add('open');
  }
}

function closeModal() {
  modal.classList.remove('open');
}
