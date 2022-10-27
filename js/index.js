import JSConfetti from 'js-confetti';
import '../css/reset.css';
import '../css/style.css';


const init = () => {
  const $form = document.querySelector('form');
  $form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
};

init();
