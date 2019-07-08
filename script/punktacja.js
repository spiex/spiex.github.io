

// if (buttons[i].classList.contains('active')) {
//   console.log(buttons[i].content);
// }

button1.addEventListener('click',()=>{
  button1.classList.add('active');
  button2.classList.remove('active');
  button3.classList.remove('active');
  checkActive();
});

button2.addEventListener('click',()=>{
  button2.classList.add('active');
  button1.classList.remove('active');
  button3.classList.remove('active');
  checkActive();
});

button3.addEventListener('click',()=>{
  button3.classList.add('active');
  button2.classList.remove('active');
  button1.classList.remove('active');
  checkActive();
});

//
// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener('click', (e) => {
//     console.log(document.querySelector('input[name="punktacja"]:checked').value);
//   });
// }
