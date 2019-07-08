const button = document.querySelectorAll("label");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', (e) => {
    console.log(document.querySelector('input[name="punktacja"]:checked').value);
  });
}
