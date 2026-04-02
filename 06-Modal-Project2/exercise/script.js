'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const openModal = function () {
  // console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeWindow = function () {
  // console.log('close');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// console.log(btnShowModal);
for (let i = 0; i < btnShowModal.length; i++) {
  // console.log(btnShowModal[i].textContent);
  btnShowModal[i].addEventListener('click', openModal);
}

closeModal.addEventListener('click', closeWindow);
overlay.addEventListener('click', closeWindow);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeWindow();
    // console.log('close1');
  }
});
