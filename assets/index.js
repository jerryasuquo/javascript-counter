var counter = document.getElementById("counter"); // find the element with the ID 'counter'
var count = counter.textContent;
let max = 50; // maximum count value
var increment = document.getElementById("increment"); // find the element with the ID 'increment'
var decrement = document.getElementById("decrement"); // find the element with the ID 'decrement'

increment.addEventListener("click", function () {
  // this function is executed whenever the user clicks the increment button
  if (count < max) {
    counter.textContent = ++count;
  }
});

decrement.addEventListener("click", function () {
  // this function is executed whenever the user clicks the decrement button
  if (count > 0) {
    counter.textContent = --count;
  }
});
