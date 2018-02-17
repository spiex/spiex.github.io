
// ==================== DIM NAVBAR ON SCROLL ============
var fadeStart=210;
$(window).bind('scroll', function(){
    var offset = $(document).scrollTop();
    if (offset>=fadeStart) {
      $('nav').css('background-color','#333');
    } else if (offset < fadeStart) {
      $('nav').css('background-color','rgba(51,51,51,.8)');
    }
});


// funcja print, duplikat
function print(message, location) {
  let div = document.querySelector(location);
  div.innerHTML = message;
}


// // SORTOWANIE, specjalna funkcja tylko dla asc
function sortujSezon(n) {
  const table = document.getElementById("sezony");
  let switching = true;
  let shouldSwitch;
  let rows;

  while (switching) {
    switching = false;
    rows = table.querySelectorAll("TR")
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].querySelectorAll("TD")[n];
      y = rows[i+1].querySelectorAll("TD")[n];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }

  }

  for (g = 0; g < (rows.length - 1); g++) {
    let cell = document.createElement('TD');
    cell.textContent = `${g+1}`;
    cell.className = 'cell-numeral lightgrey';
    rows[g].insertBefore(cell, rows[g].firstChild); // append as a first cell
  }

}
// koniec

// ==================== FUNKCJA SKŁADANIA TABELI STARTÓW ======================================
// ============================================================================================
// ============================================================================================
// use the map method to create a temporary array, then we use the indexOf method to see if we can find the same object inside of our map. If we do, then we know it is a duplicate - HOW THE FUCK DOES IT WORK?
function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
};

function createCopy(database, sezon) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].rok == sezon) {
      databaseSeason.push(database[i]);
    }; // create a copy with records only from a given year
  }
}

function liczbaStartow(runner,sezon) {
  let suma = [];
  databaseSeason = [];
  createCopy(database, sezon);
  for (let z = 0; z < databaseSeason.length; z++) {
    if (databaseSeason[z].kto == runner) {
      suma.push(databaseSeason[z]);
    }
  }
  return suma.length;
}

// formatowanie tabeli
function tabela (arr) {

  userPrint = [];

  for (let i = 0; i < arr.length; i++) {
    // some ugly ass code to fix later, applies class "zyciowka" for pb runs
    userPrint += `<tr><td class="lightgrey cell-date">${arr[i].data}</td><td class="grey cell-run-name">${arr[i].nazwabiegu}</td><td class="lightgrey cell-distance">${arr[i].dystans} km </td>`;

    if (arr[i].pbmareczek == "true") {
      userPrint += `<td class="zyciowka cell-duration">${arr[i].czasmareczek}</td><td class="zyciowka cell-duration">${arr[i].tempomareczek}</td>`;
    } else {
      userPrint += `<td class="cell-duration">${arr[i].czasmareczek}</td><td class="cell-duration">${arr[i].tempomareczek}</td>`;
    }

    if (arr[i].pbspiex == "true") {
      userPrint += `<td class="zyciowka cell-duration">${arr[i].czasspiex}</td><td class="zyciowka cell-duration">${arr[i].tempospiex}</td>`;
    } else {
      userPrint += `<td class="lightgrey cell-duration">${arr[i].czasspiex}</td><td class="lightgrey cell-duration">${arr[i].tempospiex}</td>`;
    }

    if (arr[i].pbtrybul == "true") {
      userPrint += `<td class="zyciowka cell-duration">${arr[i].czastrybul}</td><td class="zyciowka cell-duration">${arr[i].tempotrybul}</td></tr>`;
    } else {
      userPrint += `<td class="cell-duration">${arr[i].czastrybul}</td><td class="cell-duration">${arr[i].tempotrybul}</td></tr>`;
    }
  }

  return userPrint;
}

// szukanie tych samych biegów
function findObjectByKey(array, value, value2, value3) {
  for (var i = 0; i < array.length; i++) {
      if (array[i].data === value && array[i].nazwabiegu === value2 && array[i].kto == value3) {
          return array[i];
      }
  }
  return null;
}

// GŁÓWNA FUNKCJA
function przejebane(sezon) {
  filtered = [];
  databaseSeason = [];
  createCopy(database, sezon);

  while ((rekord = databaseSeason.shift()) !== undefined ) {
    // shift works best with while loop? 'for' stops halfway

    // if there is no such item, replace it with empty to avoid "undefined"
    let empty = {"czas": "", "tempo": ""};
    let trybul = findObjectByKey(database, rekord.data, rekord.nazwabiegu, 'Trybul') || empty;
    let spiex = findObjectByKey(database, rekord.data, rekord.nazwabiegu, 'Śpiex') || empty;
    let mareczek = findObjectByKey(database, rekord.data, rekord.nazwabiegu, 'Mareczek') || empty;

    let nowyrekord = {"data": `${rekord.data}`, "nazwabiegu": `${rekord.nazwabiegu}`, "dystans": `${rekord.dystans}`, "pbspiex": `${spiex.pb}`,"czasspiex": `${spiex.czas}`, "tempospiex": `${spiex.tempo}`, "pbtrybul": `${trybul.pb}`, "czastrybul": `${trybul.czas}`, "tempotrybul": `${trybul.tempo}`, "pbmareczek": `${mareczek.pb}`, "czasmareczek": `${mareczek.czas}`, "tempomareczek": `${mareczek.tempo}`};

    filtered.push(nowyrekord);
  }

  filtered = removeDuplicates(filtered, 'nazwabiegu');

  tabela(filtered);
  userPrint += `<tr><td colspan="4">suma startów</td><td colspan="2">${liczbaStartow('Mareczek', sezon)}</td><td colspan="2">${liczbaStartow('Śpiex', sezon)}</td><td colspan="2">${liczbaStartow('Trybul', sezon)}</td></tr>`;
  print(userPrint, '#sezony');

  let data = `sezon ${sezon}`;
  print(data, '#top-row-sezony-date');

  sortujSezon(0);
};
// ==================== / FUNKCJA SKŁADANIA TABELI STARTÓW ====================================
// ============================================================================================
// ============================================================================================

// ==================== ASIDE, ROZWIŃ / ZWIŃ ============
const listener2 = document.querySelectorAll('.edit-box');

for (let x = 0; x < listener2.length; x ++) {
  listener2[x].addEventListener('click', (ev) => {

    if (ev.target.className == "edit-box" ) {
      let box2 = ev.target.parentNode;
      let box3 = box2.nextElementSibling;
      box3.style.display = "flex";
      ev.target.textContent = "zwiń";
      ev.target.className = "edit-box-hidden";
    } else if (ev.target.className == "edit-box-hidden" ) {
      let box2 = ev.target.parentNode;
      let box3 = box2.nextElementSibling;
      box3.style.display = "none";
      ev.target.textContent = "rozwiń";
      ev.target.className = "edit-box";
    }

  });
}
