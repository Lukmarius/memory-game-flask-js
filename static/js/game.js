var numOfCells = document.getElementsByClassName("cells").length;

var allImages = new Array("fa-signal", "fa-tablet-alt", "fa-car", "fa-code-branch", 
                          "fa-tablets", "fa-box-open", "fa-anchor", "fa-compass", 
                          "fa-anchor", "fa-arrows-alt", "fa-balance-scale", "fa-hand-holding-usd",
                          "fa-basketball-ball", "fa-at", "fa-barcode", "fa-bath", 
                          "fa-battery-three-quarters", "fa-bicycle", "fa-home",
                          "fa-futbol", "fa-heart", "fa-save", "fa-road", "fa-table-tennis",
                          "fa-moon", "fa-music", "fa-phone", "fa-search",
                          "fa-shower", "fa-sun", "fa-subway", "fa-thermometer-half");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    } return array
};

allImages = shuffleArray(allImages);

var imagesArray = allImages.slice(0, (numOfCells/2));
imagesArray = imagesArray.concat(imagesArray);
imagesArray = shuffleArray(imagesArray);

for (i=0; i<=numOfCells-1; i++) {
    var cell = document.getElementById(i);
    cell.classList.add("fas", "fa-align-justify");
};

function toggleClass(id) {
    var numOfCells = document.getElementsByClassName("cells").length;
    var cell = document.getElementById(id);
    var oldClass = "fa-align-justify";
    var newClass = imagesArray[id];
    cell.classList.toggle(newClass, true);
    cell.classList.toggle(oldClass, false);
    var countBack = document.getElementsByClassName("fa-align-justify").length;
    console.log('Backs: ' + countBack); /* test*/
    if (countBack % 2 != 0) {
        var countCurrent = document.getElementsByClassName(newClass).length;
        console.log('current: ' + countCurrent); /* test*/
        if (countCurrent == 1) {
            for (i=0; i<=numOfCells-1; i++) { /* NOT ALL !!! */
                document.getElementById(i).className = "fas fa-align-justify";
            };
            cell.classList.toggle(newClass, true);
        }
    }
};

