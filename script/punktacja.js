// const array = [
//   ["0 - 0", "6", "6", "8", "7.5", "7.5", "10", "10.5", "10.5", "14"],
//   ["1 - 0", "3", "5", "7", "4.5", "7.5", "10.5", "6", "10", "14"],
//   ["1 - 1", "6", "6", "8", "7.5", "7.5", "10", "10.5", "10.5", "14"]];




// if (buttons[i].classList.contains('active')) {
//   console.log(buttons[i].content);
// }

button1.addEventListener('click',()=>{
  button1.classList.add('active');
  button2.classList.remove('active');
  button3.classList.remove('active');
  // checkActive(array);
});

button2.addEventListener('click',()=>{
  button2.classList.add('active');
  button1.classList.remove('active');
  button3.classList.remove('active');
  // checkActive(array);
});

button3.addEventListener('click',()=>{
  button3.classList.add('active');
  button2.classList.remove('active');
  button1.classList.remove('active');
  // checkActive(array);
});

//
// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener('click', (e) => {
//     console.log(document.querySelector('input[name="punktacja"]:checked').value);
//   });
// }
