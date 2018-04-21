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

var turnedUp = []; /* array of turned up cards */

function toggleClass(id) {
    var numOfCells = document.getElementsByClassName("cells").length;
    var cell = document.getElementById(id);
    var oldClass = "fa-align-justify";
    var newClass = imagesArray[id];
    cell.classList.toggle(newClass, true);
    cell.classList.toggle(oldClass, false);
    turnedUp.push(cell);
    console.log("After turned up: ");
    console.log(turnedUp);
    if (turnedUp.length % 2 == 0) {
        if (turnedUp[turnedUp.length-1].className != turnedUp[turnedUp.length-2].className) {
            turnedUp[turnedUp.length-2].className = '';
            turnedUp[turnedUp.length-2].classList.add("fas", "fa-align-justify");
            console.log("To splice:")
            console.log(turnedUp[turnedUp.length-2])
            turnedUp.splice(turnedUp.length-2, 1);
            console.log("After turned down:");
            console.log(turnedUp);
        };
    };

};
