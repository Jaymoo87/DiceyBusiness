let randomRoll = (min, max) => Math.floor(Math.random() * (max - min) + min);
let arrayOfDice = [];

$("body").append('<div id="container"></div');
$("#container").append(arrayOfDice);

class Die {
  constructor() {
    this.div = $("<div id='die'></div>");
    $("#container").append(this.div);
  }
  roll() {
    this.value = randomRoll(1, 5);
    this.div.text(this.value);
    console.log(this.value);
  }
}
console.log(arrayOfDice);
$("#createdie").click(function () {
  $("#container").append($("<div id='die'></div>"));
});
$("#die").click(function () {
  console.log("hey");
});
