var adultMinusButton = document.getElementById('adult-minus');
var adultPlusButton = document.getElementById('adult-plus');
var kidMinusButton = document.getElementById('kid-minus');
var kidPlusButton = document.getElementById('kid-plus');
var adults = document.getElementById('adults');
var kids = document.getElementById('kids');

adultMinusButton.addEventListener('click', adultMinus);
function adultMinus() {
  event.preventDefault();
  adultPlusButton.classList.remove('btn-type-qty--disabled');
  if (adults.value > 1) {
    --adults.value;
  } else if (adults.value > 0) {
    --adults.value;
    adultMinusButton.classList.add('btn-type-qty--disabled');
  }
}
adultPlusButton.addEventListener('click', adultPlus);
function adultPlus() {
  event.preventDefault();
  adultMinusButton.classList.remove('btn-type-qty--disabled');
  if (adults.value < 9) {
    ++adults.value;
  } else if (adults.value < 10) {
    ++adults.value;
    adultPlusButton.classList.add('btn-type-qty--disabled');
  }
}
kidMinusButton.addEventListener('click', kidMinus);
function kidMinus() {
  event.preventDefault();
  kidPlusButton.classList.remove('btn-type-qty--disabled');
  if (kids.value > 1) {
    --kids.value;
  } else if (kids.value > 0) {
    --kids.value;
    kidMinusButton.classList.add('btn-type-qty--disabled');
  }
}
kidPlusButton.addEventListener('click', kidPlus);
function kidPlus() {
  event.preventDefault();
  kidMinusButton.classList.remove('btn-type-qty--disabled');
  if (kids.value < 9) {
    ++kids.value;
  } else if (kids.value < 10) {
    ++kids.value;
    kidPlusButton.classList.add('btn-type-qty--disabled');
  }
}
