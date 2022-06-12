const inputQuestion = document.querySelector('#inputQuestion');
const answerElement = document.querySelector('#answer');
const modal = document.getElementById('modal');
const container = document.getElementById('container');
document.onkeydown = onKeyDown;

const answer = [
  'No.',
  'Yes.',
  'Perhaps.',
  'For sure!',
  'No doubt!',
  'Probably.',
  'I think so.',
  `I'm not sure.`,
  'Ask again later.',
  'Yes, definitely!',
  'Yes, eventually.',
  'My response is no.',
  `Don't count on that.`,
  'Focus and ask again.',
  'You can count on that.',
  'Better not tell you yet.',
  'My sources tell me not so.',
  `It's not possible to predict it now.`
];

function response() {
  if (inputQuestion.value != '') {
    const totalAnswer = answer.length;
    const randomNumber = Math.floor(Math.random() * totalAnswer);

    document.getElementById('question').innerHTML = inputQuestion.value;
    answerElement.innerHTML = answer[randomNumber];

    modal.classList.add('open');

    container.classList.add('blur');
  }
}

function closeModal() {
  modal.classList.remove('open');
  container.classList.remove('blur');
}

function onKeyDown() {
  const event = window.event;
  const input = document.getElementById('inputQuestion');

  if (event.keyCode === 27) {
    closeModal();
  }

  if (event.keyCode === 13) {
    response();
  }
}
