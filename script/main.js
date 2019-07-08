const wyniki = document.querySelectorAll("#current-matches-box");
const box = document.querySelectorAll('.hidden-content');

// https://css-tricks.com/using-css-transitions-auto-dimensions/

for (let i = 0; i < wyniki.length; i++) {
  wyniki[i].addEventListener('click', (e) => {

      if (e.target.className == "overlay hidden" ) {
        let box1 = e.target.parentNode;
        let box2 = box1.nextElementSibling;
        box2.style.maxHeight = "280px";
        e.target.className = "overlay visible";
      } else if (e.target.className == "overlay visible" ) {
        let box1 = e.target.parentNode;
        let box2 = box1.nextElementSibling;
        box2.style.maxHeight = "0";
        e.target.className = "overlay hidden";
      }

  });
}

const toggleWykres = document.querySelector("#toggle-wykres");
const toggleTabelka = document.querySelector("#toggle-tabelka");
const pojemnikWykres = document.querySelector("#pojemnik-wykres");
const pojemnikTabelka = document.querySelector("#pojemnik-tabelka");

toggleWykres.addEventListener('click',()=>{

  //pojemnikTabelka.style.opacity = 0;
  pojemnikTabelka.style.transform = 'translateX(-200%)';
  //pojemnikWykres.style.opacity = 1;
  pojemnikWykres.style.transform = 'translateX(0)';
  // console.log(document.querySelector('input[name="tabela"]:checked').value);
});

toggleTabelka.addEventListener('click',()=>{

  //pojemnikTabelka.style.opacity = 1;
  pojemnikTabelka.style.transform = 'translateX(0)';
  //pojemnikWykres.style.opacity = 0;
  pojemnikWykres.style.transform = 'translateX(200%)';

  // console.log(document.querySelector('input[name="tabela"]:checked').value);
});
