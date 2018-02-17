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
function print3(message, location) {
  let div = document.querySelector(location);
  div.innerHTML += message;
}


function filter2 (value, array, key, output) {
  for (let i = 0; i < array.length; i++) {
    if (value == array[i][key]) {
      output.push(array[i]);
    }
  }
}; // DUPLICATE, also similar to filter from baza startów, merge later

// ==================== FIND MOST FREQUENT RUNS ============
let mf = 1;
let m = 0;
let item;
let mfrun;
// used later
function getMostFrequent(array) {
  mf = 0;
  m = 0;
  item;
  for (let i=0; i < array.length; i++) {
    for (let j=i; j < array.length; j++) {
      if (array[i].nazwabiegu == array[j].nazwabiegu) {
        m++; // porównuje rekord i ze wszystkim rekordami w bazie (j), jeśli dubel -> m + 1
      }
      if (mf < m) { // jeśli m większe niż 1 (= przynajmniej jeden dubel), mf jest zapisany jako dotychczasowy rekord wystąpień, a item to nazwa dotychczasowego zwycięzcy
        mf = m;
        item = array[i].nazwabiegu;
      }
    }
    m=0;

  }
  return item;
  return mf;
}

function mostFrequent(kto, dystans) {
  pbBase = [];
  pbBase2 = [];
  mf = 0;
  m = 0;
  item;
  filter2(kto, database, 'kto', pbBase);
  filter2(dystans, pbBase, 'dystans', pbBase2);

  getMostFrequent(pbBase2);
  return mfrun = {"bieg": item, "powtorzenia": mf};
}
function mostFrequentPlayer(kto, bieg) {
  pbBase = [];
  pbBase2 = [];

  filter2(kto, database, 'kto', pbBase);
  filter2(bieg, pbBase, 'nazwabiegu', pbBase2);

  getMostFrequent(pbBase2);
  return bestPlayer = {"bieg": item, "powtorzenia": mf};
}
// ==================== / FIND MOST FREQUENT RUNS ============

// ==================== PROTOTYPES FOR PACE CALCULATIONS ============
String.prototype.toSeconds = function () { str = this;
    var p = str.split(':'),
        s = 0, m = 1;
    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    return s;
}
Number.prototype.toHHMMSS = function () { d = this;
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
};
// ==================== / PROTOTYPES FOR PACE CALCULATIONS ============

// ==================== GET ALL YEARLY STATS ============
let kilometraz = 0;
let liczbaStartow2 = 0;
let sumaCzasow = 0;
let pace = 0;
let records = [];

function goThroughYear(year) {
  pbBase2 = [];
  kilometraz = 0.00;
  liczbaStartow2 = 0;
  sumaCzasow = 0;
  pace = 0;
  filter2(year, pbBase, 'rok', pbBase2);

  for (let i = 0; i < pbBase2.length; i++) {
    kilometraz += parseFloat(pbBase2[i].dystans);
    pace += pbBase2[i].tempo.toSeconds();
    liczbaStartow2 += 1;
    sumaCzasow += pbBase2[i].czas.toSeconds();
  }

  records[0][year] = kilometraz.toFixed(2); // suma km

  let avdist = (kilometraz / liczbaStartow2).toFixed(2);
  if ( avdist !== "NaN") {
    records[2][year] = avdist;
  } else {
    records[2][year] = '0';
  } // średni dyst

  let avpace = (pace / pbBase2.length).toHHMMSS();
  if ( avpace !== "aN:aN:aN") {
    records[3][year] = avpace;
  } else {
    records[3][year] = '-';
  } // śr tempo

  let weighpace = (sumaCzasow / kilometraz.toFixed(2)).toHHMMSS();
  if ( weighpace !== "aN:aN:aN") {
    records[4][year] = weighpace;
  } else {
    records[4][year] = '00:00:00';
  } // tempo ważone

  records[5][year] = liczbaStartow2; // # startów
}
// ==================== / GET ALL YEARLY STATS ============

// ==================== ADD SEASONAL STATS, ADD MOST FREQUENT & CREATE THE FINAL DATABASE ============
function getFullStats(kto) {
  pbBase = [];
  pbBase3 = [];
  pbBase4 = [];
  records = [{},{},{},{},{},{},{},{},{},{}]; // "suma km", "suma km (prog)", "średni dystans", "średnie tempo", "tempo ważone", "liczba startów", "liczba startów (prog)", najczęstsze starty, pbs, av pace all years

  // get progressive values [1] and [6]
  filter2(kto, database, 'kto', pbBase);
  let lata = [2012, 2013, 2014, 2015, 2016, 2017, 2018];
  for (let i = 0; i < lata.length; i++) {
    goThroughYear(lata[i]);
    if (lata[i] < 2013) { // jeśli rok = 2012, nie sumuj
      records[6][lata[i]] = liczbaStartow2;
      records[1][lata[i]] = parseFloat(kilometraz).toFixed(2);
    } else { // jeśli > 2013, dodaj starty do tych z poprzedniego roku
      records[6][lata[i]] = liczbaStartow2 + records[6][lata[i - 1]];
      let suma = parseFloat(kilometraz) + parseFloat(records[1][lata[i-1]]); // zamień na liczbę, żeby później móc zaokrąglić
      records[1][lata[i]] = suma.toFixed(2); // round it down
    }
  }
  // get the most frequent starts
  let dystanse = ['5','10','15','21.1','42.2'];
  for (let g = 0; g < dystanse.length; g++) {
    records[7][g] = mostFrequent(kto, dystanse[g]);
  }
  // get the personal best
  filter2(true, database,'pb', pbBase3);
  filter2(kto, pbBase3,'kto', pbBase4); // filter the records where 'pb' is true

  for (let h = 0; h < pbBase4.length; h++) {
    let zyciowki2 = {"data": pbBase4[h].data,"dystans": pbBase4[h].dystans,"czas": pbBase4[h].czas,"tempo": pbBase4[h].tempo,"nazwabiegu": pbBase4[h].nazwabiegu};
    for (let j = 0; j < dystanse.length; j++) { // sort pb by distance
      if (zyciowki2.dystans == dystanse[j]) {
        records[8][j] = zyciowki2;
      }
    }
  }
  // get the average pace
  let pace2 = 0;
  let liczbaStartow3 = 0;
  for (let i = 0; i < pbBase.length; i++) {
    pace2 += pbBase[i].tempo.toSeconds();
    liczbaStartow3 += 1;
    sumaCzasow += pbBase[i].czas.toSeconds();
  }
  records[9] = (pace2 / liczbaStartow3).toHHMMSS();

  return records;
} // returns let records
// ==================== ADD SEASONAL STATS, ADD MOST FREQUENT & CREATE A FINAL DATABASE ============

// ==================== CREATE BOXES WITH STATS ============
function boksyStatystyk() { // make table to compare
  let runners = ["Mareczek", "Śpiex", "Trybul"];

  for (let i = 0; i < runners.length; i++) {

    getFullStats(runners[i]);
    let content = `<div class="wyniki-statystyki">
      <div>
        <div class="runners-name-box">
          <h2>${runners[i]}</h2>
        </div>
        <div class="box-zyciowki">
          <h3>życiówki</h3>
          <div>
            <div class="toggle-content">
              <p>5 km:</p><p>${records[8][0].czas}</p><p>${parseInt(records[8][0].data)}</p><p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p class="bold">${records[8][0].nazwabiegu}</p>
              <p>${records[8][0].data}</p>
              <p>${records[8][0].tempo}</p>
            </div>
          </div>
          <div>
            <div class="toggle-content">
              <p>10 km:</p><p>${records[8][1].czas}</p><p>${parseInt(records[8][1].data)}</p><p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p class="bold">${records[8][1].nazwabiegu}</p>
              <p>${records[8][1].data}</p>
              <p>${records[8][1].tempo}</p>
            </div>
          </div>
          <div>
            <div class="toggle-content">
              <p>15 km:</p><p>${records[8][2].czas}</p><p>${parseInt(records[8][2].data)}</p><p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p class="bold">${records[8][2].nazwabiegu}</p>
              <p>${records[8][2].data}</p>
              <p>${records[8][2].tempo}</p>
            </div>
          </div>
          <div>
            <div class="toggle-content">
              <p>21.1 km</p><p>${records[8][3].czas}</p><p>${parseInt(records[8][3].data)}</p><p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p class="bold">${records[8][3].nazwabiegu}</p>
              <p>${records[8][3].data}</p>
              <p>${records[8][3].tempo}</p>
            </div>
          </div>
          <div>
            <div class="toggle-content">
              <p>42.2 km</p><p>${records[8][4].czas}</p><p>${parseInt(records[8][4].data)}</p><p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p class="bold">${records[8][4].nazwabiegu}</p>
              <p>${records[8][4].data}</p>
              <p>${records[8][4].tempo}</p>
            </div>
          </div>
        </div>
        <div class="box-statystyki">
          <h3>statystyki</h3>
          <div>
            <div class="toggle-content">
              <p><span class="bold">łączny dystans:</span></p><p> ${(parseFloat(records[0][2012])+parseFloat(records[0][2013])+parseFloat(records[0][2014])+parseFloat(records[0][2015])+parseFloat(records[0][2016])+parseFloat(records[0][2017])+parseFloat(records[0][2018])).toFixed(2)} km</p>
              <p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p><span class="bold">2012:</span><br> ${parseFloat(records[0][2012])} km</p>
              <p><span class="bold">2013:</span><br> ${parseFloat(records[0][2013])} km</p>
              <p><span class="bold">2014:</span><br> ${parseFloat(records[0][2014])} km</p>
              <p><span class="bold">2015:</span><br> ${parseFloat(records[0][2015])} km</p>
              <p><span class="bold">2016:</span><br> ${parseFloat(records[0][2016])} km</p>
              <p><span class="bold">2017:</span><br> ${parseFloat(records[0][2017])} km</p>
              <p><span class="bold">2018:</span><br> ${parseFloat(records[0][2018])} km</p>
            </div>
          </div>
          <div>
            <div class="toggle-content">
              <p><span class="bold">średni dystans:</span></p><p> ${((parseInt(records[0][2012])+parseInt(records[0][2013])+parseInt(records[0][2014])+parseInt(records[0][2015])+parseInt(records[0][2016])+parseInt(records[0][2017])+parseInt(records[0][2018]))/parseInt(records[6][2018])).toFixed(2)} km</p>
              <p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p><span class="bold">2012:</span><br> ${parseFloat(records[2][2012])} km</p>
              <p><span class="bold">2013:</span><br> ${parseFloat(records[2][2013])} km</p>
              <p><span class="bold">2014:</span><br> ${parseFloat(records[2][2014])} km</p>
              <p><span class="bold">2015:</span><br> ${parseFloat(records[2][2015])} km</p>
              <p><span class="bold">2016:</span><br> ${parseFloat(records[2][2016])} km</p>
              <p><span class="bold">2017:</span><br> ${parseFloat(records[2][2017])} km</p>
              <p><span class="bold">2018:</span><br> ${parseFloat(records[2][2018])} km</p>
            </div>
          </div>
          <div>
            <div class="toggle-content">
              <p><span class="bold">liczba startów:</span></p><p> ${parseInt(records[6][2018])}</p><p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p><span class="bold">2012:</span><br> ${parseInt(records[5][2012])}</p>
              <p><span class="bold">2013:</span><br> ${parseInt(records[5][2013])}</p>
              <p><span class="bold">2014:</span><br> ${parseInt(records[5][2014])}</p>
              <p><span class="bold">2015:</span><br> ${parseInt(records[5][2015])}</p>
              <p><span class="bold">2016:</span><br> ${parseInt(records[5][2016])}</p>
              <p><span class="bold">2017:</span><br> ${parseInt(records[5][2017])}</p>
              <p><span class="bold">2018:</span><br> ${parseInt(records[5][2018])}</p>
            </div>
          </div>
          <div>
            <div class="toggle-content">
              <p><span class="bold">średnie tempo:</span></p><p> ${records[9]} </p><p class="rozwin">[rozwiń]</p>
            </div>
            <div class="hidden-content">
              <p><span class="bold">2012:</span><br> ${records[3][2012]}</p>
              <p><span class="bold">2013:</span><br> ${records[3][2013]}</p>
              <p><span class="bold">2014:</span><br> ${records[3][2014]}</p>
              <p><span class="bold">2015:</span><br> ${records[3][2015]}</p>
              <p><span class="bold">2016:</span><br> ${records[3][2016]}</p>
              <p><span class="bold">2017:</span><br> ${records[3][2017]}</p>
              <p><span class="bold">2018:</span><br> ${records[3][2018]}</p>
            </div>
          </div>
        </div>
        <div class="box-starty">
          <h3>najczęstsze starty</h3>
          <div class="toggle-content">
            <p>5 km</p><p>${records[7][0].bieg}</p><p>${records[7][0].powtorzenia}</p>
          </div>
          <div class="toggle-content">
            <p>10 km</p><p>${records[7][1].bieg}</p><p>${records[7][1].powtorzenia}</p>
          </div>
          <div class="toggle-content">
            <p>15 km</p><p>${records[7][2].bieg}</p><p>${records[7][2].powtorzenia}</p>
          </div>
          <div class="toggle-content">
            <p>21.1 km</p><p>${records[7][3].bieg}</p><p>${records[7][3].powtorzenia}</p>
          </div>
          <div class="toggle-content">
            <p>42.2 km</p><p>${records[7][4].bieg}</p><p>${records[7][4].powtorzenia}</p>
          </div>
        </div>
      </div>
    </div>`;
    print3(content, '#zyciowki');
  }
}
boksyStatystyk(); // run on page load
// ==================== / CREATE BOXES WITH STATS ============


// ===============================================================================
// ==================== GET GLOBAL STATS =========================================
// ===============================================================================

// ==================== GET HIGHEST ==============================================
let maxRecord = [];
function getMax(key) {
  let max = 0;
  maxRecord = [];
  let globalStatsFiltered = [];
  let runners = ["Mareczek", "Śpiex", "Trybul"];
  for (let i = 0; i < runners.length; i++) {
    getFullStats(runners[i]);
    let lata = [2012, 2013, 2014, 2015, 2016, 2017, 2018];
    for (let j = 0; j < lata.length; j++) {
      let nowyRekord = {};
      nowyRekord.dyst = parseFloat(records[key][lata[j]]);
      nowyRekord.rok = lata[j];
      nowyRekord.kto = runners[i];
      globalStatsFiltered.push(nowyRekord);
    }

  }

  for (let g = 0; g < globalStatsFiltered.length; g++) {
    if (globalStatsFiltered[g].dyst > max) {
      max = globalStatsFiltered[g].dyst;
      maxRecord = {"dyst": globalStatsFiltered[g].dyst, "rok": globalStatsFiltered[g].rok, "kto": globalStatsFiltered[g].kto};

    }
  }
  console.log(maxRecord.dyst);
  return maxRecord;

}
function getMaxAv(key) {
  let max = "10:00:00";
  maxRecord = [];
  let globalStatsFiltered = [];
  let runners = ["Mareczek", "Śpiex", "Trybul"];
  for (let i = 0; i < runners.length; i++) {
    getFullStats(runners[i]);
    let lata = [2012, 2013, 2014, 2015, 2016, 2017, 2018];
    for (let j = 0; j < lata.length; j++) {
      let nowyRekord = {};
      nowyRekord.dyst = records[key][lata[j]];
      nowyRekord.rok = lata[j];
      nowyRekord.kto = runners[i];
      globalStatsFiltered.push(nowyRekord);
    }

  }

  for (let g = 0; g < globalStatsFiltered.length; g++) {
    if (globalStatsFiltered[g].dyst == "-") {
  } else if (globalStatsFiltered[g].dyst < max) {
      max = globalStatsFiltered[g].dyst;
      maxRecord = {"dyst": globalStatsFiltered[g].dyst, "rok": globalStatsFiltered[g].rok, "kto": globalStatsFiltered[g].kto};

    }
  }
  console.log(maxRecord);
  return maxRecord;

}
// ==================== / GET HIGHEST ==============================================

// ==================== GET FASTEST IN A YEAR =====================================
let fastestRuns = [];
function getFastest() {
  let max = "10:00:00";
  let maxRecord = [];
  let statsFiltered = [];
  let statsFiltered2 = [];
  fastestRuns = [];
  let distances = [5, 10, 15, 21.1, 42.2];
  for (let i = 0; i < distances.length; i++) {
    statsFiltered = [];
    filter2(distances[i], database, 'dystans', statsFiltered);
    let lata = [2012, 2013, 2014, 2015, 2016, 2017, 2018];
    for (let j = 0; j < lata.length; j++) {
      statsFiltered2 = [];
      max = "10:00:00";
      filter2(lata[j], statsFiltered, 'rok', statsFiltered2);
      for (let g = 0; g < statsFiltered2.length; g++) {
        if (statsFiltered2[g].czas < max) {
          max = statsFiltered2[g].czas;
          maxRecord = {"czas": statsFiltered2[g].czas, "nazwabiegu": statsFiltered2[g].nazwabiegu, "kto": statsFiltered2[g].kto};
        }

      }
      if (max == "10:00:00") {
        maxRecord = {"czas": "-", "nazwabiegu": "-", "kto": "-"};
      }
      fastestRuns.push(maxRecord);
    }
  }
  console.log(fastestRuns);
  return fastestRuns;
}
// ==================== / GET FASTEST IN A YEAR =====================================

// ==================== GET MOST POPULAR OVERALL =====================================
function mostFrequentOverall() {

  mfrun = [];

  for (let y = 0; y < 17; y += 4) { // loop five times, so we get top5, leaving three slots for individual numbers
    getMostFrequent(database);

    mfrun[y] = {"bieg": item, "powtorzenia": mf}; // make a main record, with a top run
    // add number of individual starts in slots y + 1, 2 and 3
    let runners = ["Mareczek", "Śpiex", "Trybul"];
    for (let i = 0; i < runners.length; i++) {
      mostFrequentPlayer(runners[i], mfrun[y].bieg); // returns bestPlayer
      mfrun[y+1+i] = bestPlayer; // y = [0,4,8,12,16] + i [index of runners] + 1 since starts at zero
    }

    for (let x = 0; x < mfrun[y].powtorzenia; x++) { // remove all runs that match item
      var index = database.map(function(e) { return e.nazwabiegu; }).indexOf(item); // find all indexes of matched run
      database.splice(index,1); // remove it from the database, so we cound find next one
    }

  } // end of top 5 loop
  console.log(mfrun);
  return mfrun;
} // end function
// ==================== / GET MOST POPULAR OVERALL =====================================


// ==================== FORM GLOBAL STATS INTO A BOX =================================
function getGlobalStats() {

  let content = document.createElement('DIV');
  content.className = 'wyniki-statystyki';
  content.innerHTML += `<div class="runners-name-box"><h2>globalne staty</h2></div>`;

  // pierwszy boks
  let box1 = document.createElement('DIV');
  box1.className = 'box-rekordy';
  box1.innerHTML += `<h3>rekordy sezonu</h3>`

  let index = [5, 0, 2,];
  let label = ["starty:", "dystans:", "średnia km:"];
  for (let i = 0; i < index.length; i++) {
    getMax(index[i]);
    box1.innerHTML += `<div class="toggle-content"><p>${label[i]}</p><p>${maxRecord.dyst}</p><p>${maxRecord.rok}</p><p>${maxRecord.kto}</p></div>`;
  }

  getMaxAv(3);
  box1.innerHTML += `<div class="toggle-content"><p>tempo:</p><p>${maxRecord.dyst}</p><p>${maxRecord.rok}</p><p>${maxRecord.kto}</p></div>`;
  content.appendChild(box1);

  // drugi boks
  let box2 = document.createElement('DIV');
  box2.className = 'box-top-dystansow';
  box2.innerHTML += `<h3>najszybsze biegi w roku</h3>`
  getFastest();

  for (let j = 0; j < 5; j ++) {
    let distances = [5, 10, 15, 21.1, 42.2];
    box2.innerHTML += `<div class="toggle-content"><p><span class="bold">${distances[j]} km</span></p><p class="bold">00:19:13fix</p><p>2014fix</p><p class="rozwin">[rozwiń]</p></div>`;

    let box2hidden = document.createElement('DIV');
    box2hidden.className = "hidden-content";
    box2hidden.innerHTML = '';

    let index = [0, 7, 14, 21, 28, 35];
    for (let g = index[j]; g < index[j+1]; g++) {
      let years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
      // w chuj brzydkie rozwiązanie
      box2hidden.innerHTML += `<p><span class="bold">${years[g]}</span></p><p>${fastestRuns[g].czas}</p><p>${fastestRuns[g].nazwabiegu}</p><p>${fastestRuns[g].kto}</p>`;
    }

    box2.appendChild(box2hidden);
  }
  content.appendChild(box2);

  // trzeci boks
  let box3 = document.createElement('DIV');
  box3.className = 'box-top-zawodow';
  box3.innerHTML += `<h3>najpopularniejsze zawody</h3>`
  mostFrequentOverall();

  for (let h = 0; h < 17; h += 4) {
    let numerals = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]; // drugie w chuj brzydkie rozwiązanie, poprawić
    box3.innerHTML += `<div class="toggle-content"><p>${numerals[h]}.</p><p>${mfrun[h].bieg}</p><p>${mfrun[h].powtorzenia}</p><p class="rozwin">[rozwiń]</p></div>`

    box3.innerHTML += `<div class="hidden-content">
      <p><span class="bold">Mareczek:</span><br>${mfrun[h+1].powtorzenia}</p>
      <p><span class="bold">Śpiex:</span><br>${mfrun[h+2].powtorzenia}</p>
      <p><span class="bold">Trybul:</span><br>${mfrun[h+3].powtorzenia}</p>
    </div>`
  }
  content.appendChild(box3);

  let zyciowki = document.querySelector('#zyciowki');
  zyciowki.appendChild(content);
}

getGlobalStats();



// ==================== ZWIŃ - ROZWIŃ ============
const wyniki = document.querySelectorAll(".wyniki-statystyki");
const box = document.querySelectorAll('.hidden-content');

for (let i = 0; i < wyniki.length; i++) {
  wyniki[i].addEventListener('click', (e) => {

      if (e.target.className == "rozwin" ) {
        let box2 = e.target.parentNode;
        let box3 = box2.nextElementSibling;
        box3.style.display = "flex";
        e.target.textContent = "[zwiń]";
        e.target.className = "zwin";
      } else if (e.target.className == "zwin" ) {
        let box2 = e.target.parentNode;
        let box3 = box2.nextElementSibling;
        box3.style.display = "none";
        e.target.textContent = "[rozwiń]";
        e.target.className = "rozwin";
      }

  });
}
// ==================== / ZWIŃ - ROZWIŃ ============


















// =============TABELA ZYCIWÓWEK, NIEISTOTNE ============ //
/*

let main = document.querySelector('#zyciowki'); // select box for the table
let table = document.createElement('table'); // generate the table
let pbBase = [];
let pbBase2 = [];
let content = [];

function filter2 (value, array, key, output) {
  for (let i = 0; i < array.length; i++) {
    if (value == array[i][key]) {
      output.push(array[i]);
    }
  }
}; // similar to filter from baza startów, merge later


function createRows(startRow) { // create four rows, apply ids (row#4 is always empty for separation purposes)
  for (let i = startRow; i < (startRow + 4); i++) {
    let tr = document.createElement('TR');
    tr.id = `row-${i}`;
    table.appendChild(tr);
  }
}

function printTable() { // probably useless duplicate
  main.appendChild(table);
}


filter2(true, database,'pb', pbBase); // filter the records where 'pb' is true, only best runs

function tabela2(distance, startRow) { // run once for each distance
  pbBase2 = []; // clear copy of database
  filter2(distance, pbBase, 'dystans', pbBase2) // filter for specific distance only
  createRows(startRow); // create rows for a particular distance
  let nodes = table.childNodes; // a way of acessing each row
  let dystans = `<td rowspan="3" class="primary-cell">${distance} km</td>`; // main distance row
  nodes[startRow-1].innerHTML += dystans; // apply to first child (index of relative 0)

  while ((pbrekord = pbBase2.shift()) !== undefined ) { // loop through an array until there is nothing left

    // adding five boxes with pb data
    let cells1 = `<td>${pbrekord.kto}</td><td>${pbrekord.czas}</td>`;
    let cells2 = `<td>${pbrekord.data}</td><td>${pbrekord.tempo}</td>`;
    let cells3 = `<td colspan="2">${pbrekord.nazwabiegu}</td>`;

    nodes[startRow-1].innerHTML += cells1;
    nodes[startRow].innerHTML += cells2;
    nodes[startRow+1].innerHTML += cells3;
  }
}

function zyciowki() {
  if (table.firstChild !== undefined) {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
    }
  } // delete old table each time it's run, looping is much faster than ".innerHTML = '';"
  tabela2(5,1); // distance + start row
  tabela2(10,5);
  tabela2(15,9);
  tabela2(21.1,13);
  tabela2(42.2,17);
  printTable();
}


*/
