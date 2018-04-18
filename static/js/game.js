var numOfCells = document.getElementsByClassName("cells").length;

var allImages = new Array("fab fa-500px", "fas fa-address-book", "fab fa-amazon", 
                          "fas fa-adjust", "fab fa-affiliatetheme", "fab fa-android", 
                          "fas fa-anchor", "fas fa-arrows-alt", "fas fa-balance-scale", 
                          "fas fa-basketball-ball", "fas fa-at", "fas fa-barcode", "fas fa-bath", 
                          "fas fa-battery-three-quarters", "fas fa-bicycle", "fab fa-chrome", 
                          "fas fa-futbol", "fas fa-heart", "fab fa-internet-explorer", "fas fa-save",
                          "fas fa-moon", "fas fa-music");


var imagesArray = allImages.slice(0, numOfCells - 1); /* finally numOfCells-1/2 */

/*
for (i=0; i<=numOfCells-1; i++) {
    i = string(i);
    document.getElementById(i+'t').classList.add("fas", "fa-moon");
    document.getElementById(i+'t').classList.add("fas", "fa-align-justify");
};
*/

function change(id) {
    var cell = document.getElementById(id);
    if (cell.className === "fas fa-align-justify") {
        cell.classList.add("fas", "fa-moon");
    } else if (cell.className === "fas fa-align-justify fa-moon") {
        cell.classList.remove("fa-moon");
        /*cell.classList.add("fas", "fa-align-justify");*/
    }
};
