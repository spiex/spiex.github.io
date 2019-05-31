
// ==================== ZWIŃ - ROZWIŃ ============
const wyniki = document.querySelectorAll("#current-matches-box");
const box = document.querySelectorAll('.hidden-content');

for (let i = 0; i < wyniki.length; i++) {
  wyniki[i].addEventListener('click', (e) => {

      if (e.target.className == "rozwin" ) {
        let box2 = e.target.parentNode;
        let box3 = box2.nextElementSibling;
        box3.style.height = "204px"; // TODO: 28px x liczba graczy
        e.target.textContent = "▲";
        e.target.className = "zwin";
      } else if (e.target.className == "zwin" ) {
        let box2 = e.target.parentNode;
        let box3 = box2.nextElementSibling;
        box3.style.height = "0";
        e.target.textContent = "▼";
        e.target.className = "rozwin";
      }

  });
}
// ==================== / ZWIŃ - ROZWIŃ ============
