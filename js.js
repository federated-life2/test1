i// load up the SVG images
var s1 = Snap("#svg1");
var s2 = Snap("#svg2");
var s3 = Snap("#svg3");
var s4 = Snap("#svg4");

var svgUrl = "https://raw.githubusercontent.com/federated-life2/test1/master/web13.svg"

Snap.load(svgUrl, onSVGLoaded1);
Snap.load(svgUrl, onSVGLoaded2);
Snap.load(svgUrl, onSVGLoaded3);
Snap.load(svgUrl, onSVGLoaded4);

function onSVGLoaded1(data) {
  s1.append(data);
}

function onSVGLoaded2(data) {
  s2.append(data);
}

function onSVGLoaded3(data) {
  s3.append(data);
}

function onSVGLoaded4(data) {
  s4.append(data);
}


function populateMap() {
  let tableMap = new Map([
    ['Patron1', 100],
    ['Patron2', 100],
    ['Patron3', 100],
    ['Patron4', 100],
    ['Patron5', 100],
    ['Patron6', 100],
  ]);

  tableMap.forEach(function(value, key) {
    var wager = Math.floor(Math.random() * 120) + 20;
    tableMap.set(key, wager)
  })

  return tableMap

}


// example of changing color
// var a = document.getElementById('svg').getElementById('Patron1')
// a.style.fill = 'blue'


window.onload = function() {

  for (var i = 1; i < 5; i++) {

    // which svg
    var curSvg = "svg" + i

    // get the tableMap data
    var tableMap = populateMap()

    // table heat gauge
    var tableHeat = 0

    // update the svg image
    tableMap.forEach(function(value, key) {
      // debug comments
      // console.log(curSvg + ": " + key + ' = ' + value)

      if (value >= 100) {
        document.getElementById(curSvg).getElementById(key).style.fill = 'blue'
      } else {
        document.getElementById(curSvg).getElementById(key).style.fill = 'white'
      }

      tableHeat += value;

    });

    // increase stop1 value to increase heat
    var offset = 0
    if (tableHeat > 600) {
      offset = 90 + "%";
    } else if (tableHeat > 500) {
      offset = 60 + "%";
    } else if (tableHeat > 400) {
      offset = 30 + "%";
    } else {
      offset = 0 + "%";
    }

    //document.getElementById(curSvg).getElementById('stop2').setAttribute("offset", "100%");
    document.getElementById(curSvg).getElementById('stop1').setAttribute("offset", offset);
   

    // var curSvgObject = document.getElementById(curSvg);
    // console.log(curSvgObject);
    console.log("table: " + curSvg + ", " + tableHeat + " : " + offset)

    document.getElementById(curSvg).getElementById('Table_1').textContent = "Heat: " + tableHeat;

    // var grad = document.getElementById(curSvg).getElementById('Gauge');
    // var table = document.getElementById(curSvg).getElementById('Table_1')
    // console.log(table)
    // console.log(grad);

  }

  // recommendations



};

