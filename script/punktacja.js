const button = document.querySelector('input[name="tabela"]');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', (e) => {
    console.log(document.querySelector('input[name="tabela"]:checked').value);
  });
}
