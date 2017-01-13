var adultMinusButton = document.getElementById('adult-minus');
var adultPlusButton = document.getElementById('adult-plus');
var kidMinusButton = document.getElementById('kid-minus');
var kidPlusButton = document.getElementById('kid-plus');
var adults = document.getElementById('adults');
var kids = document.getElementById('kids');

adultMinusButton.addEventListener('click', adultMinus);
function adultMinus() {
  event.preventDefault();
  if (adults.value > 0) {
    --adults.value;
  }
}
adultPlusButton.addEventListener('click', adultPlus);
function adultPlus() {
  event.preventDefault();
  if (adults.value < 10) {
    ++adults.value;
  }
}
kidMinusButton.addEventListener('click', kidMinus);
function kidMinus() {
  event.preventDefault();
  if (kids.value > 0) {
    --kids.value;
  }
}
kidPlusButton.addEventListener('click', kidPlus);
function kidPlus() {
  event.preventDefault();
  if (kids.value < 10) {
    ++kids.value;
  }
}
