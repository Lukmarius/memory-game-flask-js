var numOfCells = document.getElementsByClassName("cells").length;

var allImages = new Array("fas fa-signal", "fas fa-address-book", "fas fa-car", "fas fa-code-branch", 
                          "fas fa-adjust", "fas fa-box-open", "fas fa-anchor", "fas fa-compass", 
                          "fas fa-anchor", "fas fa-arrows-alt", "fas fa-balance-scale", "fas fa-hand-holding-usd",
                          "fas fa-basketball-ball", "fas fa-at", "fas fa-barcode", "fas fa-bath", 
                          "fas fa-battery-three-quarters", "fas fa-bicycle", "fas fa-home",
                          "fas fa-futbol", "fas fa-heart", "fas fa-save", "fas fa-road", "fas fa-table-tennis",
                          "fas fa-moon", "fas fa-music", "fas fa-phone", "fas fa-search",
                          "fas fa-shower", "fas fa-sun", "fas fa-subway", "fas fa-thermometer-half");

document.getElementById('a').innerHTML = allImages.length;/* for test only, needed 32 */

var imagesArray = allImages.slice(0, numOfCells - 1); /* finally numOfCells-1/2 */

for (i=0; i<=numOfCells-1; i++) {
    document.getElementById(i+'i').classList.add("fas", "fa-align-justify");
};


function togClass(id) {
    var cell = document.getElementById(id);
    cell.classList.toggle();
};
