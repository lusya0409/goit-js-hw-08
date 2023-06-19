import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const formState = getFormState();
// console.log(formState);
if (!!formState) {
  formEl.elements.email.value = formState.email;
  formEl.elements.message.value = formState.message;
}

function onFormInput() {
  const formValues = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
  //   console.log(formValues);
}
function onFormSubmit(e) {
  e.preventDefault();

  console.log(getFormState());

  formEl.reset();
  localStorage.removeItem('feedback-form-state');
}

function getFormState() {
  return JSON.parse(localStorage.getItem('feedback-form-state')) || '';
}