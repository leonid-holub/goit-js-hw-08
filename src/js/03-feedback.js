import throttle from 'lodash.throttle';

const defs = {
  form: document.querySelector('form.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

let formInfo = {
  email: '',
  message: '',
};

function checkFormInfo() {
  const currentFormInfo = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (currentFormInfo) {
    defs.email.value = currentFormInfo.email;
    defs.message.value = currentFormInfo.message;
  }
}

checkFormInfo();

defs.form.addEventListener(
  'input',
  throttle(event => {
    formInfo.email = defs.email.value;
    formInfo.message = defs.message.value;
    let formInfoJson = JSON.stringify(formInfo);
    localStorage.setItem('feedback-form-state', formInfoJson);
  }, 1000)
);

defs.form.addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});
