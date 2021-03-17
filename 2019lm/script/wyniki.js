const wyniki = document.querySelectorAll("#boksNaWyniki");
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
