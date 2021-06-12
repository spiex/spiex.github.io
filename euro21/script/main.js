const wyniki = document.querySelectorAll("#mecze");
const box = document.querySelectorAll('.bets-box');

for (let i = 0; i < wyniki.length; i++) {
  wyniki[i].addEventListener('click', (e) => {

    // oblicz liczbę typów w danym boksie i ustaw maksymalną wysokość
    const liczbaTypow = e.target.parentNode.nextElementSibling.querySelectorAll('.bet');
    const dlugosc = liczbaTypow.length * 24 + 4;
    // get the mx height of hidden content
    // liczba typów * 24 px + 4px na dół

      if (e.target.className == "overlay hidden" ) {
        let box1 = e.target.parentNode;
        let box2 = box1.nextElementSibling;
        box2.style.maxHeight = dlugosc + "px";
        e.target.className = "overlay visible";
      } else if (e.target.className == "overlay visible" ) {
        let box1 = e.target.parentNode;
        let box2 = box1.nextElementSibling;
        box2.style.maxHeight = "0";
        e.target.className = "overlay hidden";
      }

  });
}

const nastepnewyniki = document.querySelectorAll("#nastepnemecze");
const nastepnybox = document.querySelectorAll('.bets-box');

for (let i = 0; i < wyniki2.length; i++) {
  nastepnewyniki[i].addEventListener('click', (e) => {

    // oblicz liczbę typów w danym boksie i ustaw maksymalną wysokość
    const liczbaTypow = e.target.parentNode.nextElementSibling.querySelectorAll('.bet');
    const dlugosc = liczbaTypow.length * 24 + 4;
    // get the mx height of hidden content
    // liczba typów * 24 px + 4px na dół

      if (e.target.className == "overlay hidden" ) {
        let box1 = e.target.parentNode;
        let box2 = box1.nextElementSibling;
        box2.style.maxHeight = dlugosc + "px";
        e.target.className = "overlay visible";
      } else if (e.target.className == "overlay visible" ) {
        let box1 = e.target.parentNode;
        let box2 = box1.nextElementSibling;
        box2.style.maxHeight = "0";
        e.target.className = "overlay hidden";
      }

  });
}
