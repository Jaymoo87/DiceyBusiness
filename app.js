let randomRoll = (min, max) => Math.floor(Math.random() * (max - min) + min);
let arrayOfDice = [];
//made a container for the divs
$("body").append('<div id="container"></div');
//$("#container").append(arrayOfDice);

//create class Die ('this.' within the brackets  refers to Die, the parent class.)
class Die {
  constructor() {
    this.div = $("<div id='die'></div>");
    this.roll();
    //places the new div into an empty array
    arrayOfDice.push(this);
    $("#container").append(this.div);

    //double click removes div
    $(this.div).dblclick(() => {
      $(this.div).remove();
      //got some questions about splice and it's format.
      arrayOfDice.splice($.inArray(this, arrayOfDice), 1);
    });
  }
  roll() {
    // sets up conditions for a random roll's value and inserts it into the new Die.
    this.value = randomRoll(1, 7);
    $(this.div).text(this.value);
    //just a click and a roll
    $(this.div).click(() => this.roll());
  }
}

console.log(arrayOfDice);

$("#createdie").click(() => {
  let die = new Die();
});
$("#rolldie").click(function () {
  for (let i = 0; i < arrayOfDice.length; i++) {
    arrayOfDice[i].roll();
  }
});

$("#sumDice").click(() => {
  addDice();
});

// function removeDie() {
//   $(this.div).remove();
//   let index = arrayOfDice.indexOf(this);
//   arrayOfDice.splice(index, 1);
// }

function addDice() {
  let sum = 0;
  for (let i = 0; i < arrayOfDice.length; i++) {
    sum += arrayOfDice[i].value;
  }
  if (sum > 25) {
    alert(`${sum}: That's big numbers right there! `);
  } else {
    alert(`${sum}: gotta do better than that, that's baby numbers`);
  }
}
