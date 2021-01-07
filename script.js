document.getElementById('answer').addEventListener('click',guess)
function guess() {
  let n = document.getElementById('answer').value;
  while (n != 16) {
    n = prompt("Guess my age","")
    if(n < 16) {
      alert('The number is small, try again");
    }
    else if(n > 16) {
      alert('The number is too big, try again');
    }
  }
  alert('Correct');
}