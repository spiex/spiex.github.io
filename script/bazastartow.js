
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
// ==================== / DIM NAVBAR ON SCROLL ============


let filtered = [];
let databaseSeason = [];
let userPrint = [];

// ==================== SWITCHES  ============
const distanceSelect = $("#distance-select");
const yearSelect = $("#year-select");
const runnerSelect = $("#runner-select");
// ==================== / SWITCHES  ============

function print(message, location) {
  let div = document.querySelector(location);
  div.innerHTML = message;
}

// ==================== FILTER DATABASE ACCORDING TO SELECTED CONDITIONS  ============
function filter (selectgroup, array, key, output) {
  for (let i = 0; i < array.length; i++) {
    if (selectgroup.val() == "all14") {
        if (array[i][key] == "2014" || array[i][key] == "2015" || array[i][key] == "2016" || array[i][key] == "2017" || array[i][key] == "2018") {
        output.push(array[i]);
      }
    } else if (selectgroup.val() == "all") {
      output.push(array[i]);
    } else if (selectgroup.val() == array[i][key]) {
      output.push(array[i]);
    }
  }
}; // a year, all of them, or 2014-2018
// ==================== / FILTER DATABASE ACCORDING TO SELECTED CONDITIONS  ============

// ==================== FORMAT TABLE, NO DATA YET  ============
function formatTable(arr) {
  let tabelka = [];
  for (let i = 0; i < arr.length; i++) {
    tabelka += `<tr><td class="cell-numeral">${i+1}</td><td class="cell-date"> ${arr[i].data} </td><td class="cell-run-name lightgrey"> ${arr[i].nazwabiegu} </td><td class="cell-distance"> ${arr[i].dystans} km </td><td class="cell-duration lightgrey"> ${arr[i].czas} </td><td class="cell-duration lightgrey"> ${arr[i].tempo} </td><td class="cell-duration"> ${arr[i].kto} </td></tr>`;
  }

  print(tabelka, '#baza-startow');
}
// ==================== / FORMAT TABLE, NO DATA YET  ============

// ==================== FILTER USING THE CRITERIA, PRINT TABLE  ============
function filterAll () {
  let filtered1 = [];
  let filtered2 = [];
  let filtered3 = [];

  filter(distanceSelect, database, 'dystans', filtered1);
  filter(runnerSelect, filtered1, 'kto', filtered2);
  filter(yearSelect, filtered2, 'rok', filtered3);

  formatTable(filtered3);
};
$('#filter-button').on('click', () => {
  filterAll();
});
// ==================== / FILTER USING THE CRITERIA, PRINT TABLE  ============

// ==================== SORT RESULTS ASC/DESC ON CLICK  ============
function sortTable(n) {
  const table = document.getElementById("baza-startow");
  let switching = true;
  let shouldSwitch;
  let switchcount = 0;
  let rows;
  let dir = "asc";
  // loop that will continue until there's nothing to switch
  while (switching) {
    switching = false;
    rows = table.querySelectorAll("TR");
    // Loop through all rows
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].querySelectorAll("TD")[n];
      y = rows[i+1].querySelectorAll("TD")[n];
      // Check if the two rows should switch place, based on the direction, asc or desc:
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  // add numbers to the first row
  for (g = 0; g < rows.length; g++) {
    if (rows[g].firstChild.className = 'cell-numeral') {
      rows[g].removeChild(rows[g].firstChild);
    } // delete exisiting number so it wouldn't double
    let cell = document.createElement('TD');
    cell.textContent = `${g+1}`;
    cell.className = 'cell-numeral';
    rows[g].insertBefore(cell, rows[g].firstChild); // append as a first cell
  }

}
// ==================== / SORT RESULTS ASC/DESC ON CLICK  ============



// ==================== ADD NEW RESULTS TO DATABASE ===============================
// ================================================================================
// ================================================================================

// ==================== PROTOTYPES FOR PACE CALCULATIONS ============
String.prototype.toSeconds = function () { str = this;
    var p = str.split(':'),
        s = 0, m = 1;
    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    return s;
} //duplicate
Number.prototype.toHHMMSS = function () { d = this;
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
}; // duplicate
// ==================== / PROTOTYPES FOR PACE CALCULATIONS ============

// ==================== GET DATA FROM NEW RECORD ============
const button = document.querySelector('#add-result-button');
const nazwaBiegu = document.querySelector('#nazwa-biegu');
const dataBiegu = document.querySelector('#data-biegu');
const dystansBiegu = document.querySelector('#dystans-biegu');
const czasBiegu = document.querySelector('#czas-biegu');
const ktoBiegu = document.querySelector('#kto-biegu');
const zyciowka = document.querySelector('#zyciowka-biegu');
const addResultBox = document.querySelector('#add-result');
let nowyRekord = {};

// ===================== GET NAME FROM SELECT ==============
let runNames = [];
let runNamesWithoutDuplicates = [];
function removeDuplicates(myArr) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj).indexOf(obj) === pos;
  });
}; // modified duplicate from sezony.js

function getSelectNames() {
  for (let i = 0; i < database.length; i++) {
    let runName = database[i].nazwabiegu;
    runNames.push(runName);
  }
  runNamesWithoutDuplicates = removeDuplicates(runNames);
  runNamesWithoutDuplicates.sort();

  const select = document.querySelector('#nazwa-biegu');
  let option = document.createElement('OPTION');
  option.textContent = "--- wybierz bieg z listy ---";
  option.disabled = "true";
  option.selected = "true";
  select.appendChild(option);


  for (let g = 0; g < runNamesWithoutDuplicates.length; g++) {
    let option = document.createElement('OPTION');
    option.value = runNamesWithoutDuplicates[g];
    option.textContent = runNamesWithoutDuplicates[g];
    select.appendChild(option);
  }

}

getSelectNames(); // runs on load

// ================ REPLACE SELECT WITH INPUT AND THE OTHER WAY AROUND
const wpiszRecznie = document.querySelector('#wpisz-recznie');
wpiszRecznie.addEventListener('click',(e) => {
  e.preventDefault();
  if (wpiszRecznie.textContent == "biegu nie ma na liście?") {
    wpiszRecznie.textContent = "wróć do listy";
    const select = document.querySelector('#nazwa-biegu');
    addResultBox.removeChild(select);
    const input = document.createElement('INPUT');
    input.id = "nazwa-biegu";
    input.required = "true";
    input.type = "text";
    input.placeholder = "wpisz go ręcznie!";
    addResultBox.insertBefore(input, wpiszRecznie);
  } else if (wpiszRecznie.textContent == "wróć do listy") {
    wpiszRecznie.textContent = "biegu nie ma na liście?";
    const input = document.querySelector('#nazwa-biegu');
    addResultBox.removeChild(input);
    const select = document.createElement('SELECT');
    select.id = "nazwa-biegu";
    addResultBox.insertBefore(select, wpiszRecznie);
    getSelectNames();
  }
});
// ================ / REPLACE SELECT WITH INPUT AND THE OTHER WAY AROUND

// ================ ADD A NEW RECORD TO THE DATABASE ==================
button.addEventListener('click', (e) => {
  // e.preventDefault();
  nowyRekord = {};
  nowyRekord.data = dataBiegu.value;
  nowyRekord.rok = parseInt(dataBiegu.value);
  nowyRekord.kto = ktoBiegu.value;
  nowyRekord.dystans = dystansBiegu.value;
  const nazwaBiegu = document.querySelector('#nazwa-biegu');
  nowyRekord.nazwabiegu = nazwaBiegu.value;
  nowyRekord.czas = czasBiegu.value;
  nowyRekord.tempo = (czasBiegu.value.toSeconds() / dystansBiegu.value).toHHMMSS();
  nowyRekord.pb = zyciowka.checked; // get boolean instead of "on"
  console.log(nowyRekord);
  database.push(nowyRekord);

});
