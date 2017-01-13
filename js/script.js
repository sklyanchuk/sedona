var adultMinusButton = document.getElementById("adult-minus");
var adultPlusButton = document.getElementById("adult-plus");
var kidMinusButton = document.getElementById("kid-minus");
var kidPlusButton = document.getElementById("kid-plus");
var adults = document.getElementById("adults");
var kids = document.getElementById("kids");

adultMinusButton.addEventListener("click", adultMinus());

adultMinus = function() {
  event.preventDefault();
  --adults.value;
};
