// Initialize instances
const number = new Number();
const ui = new UI();

const search = document.getElementById('search'),
  trivia = document.getElementById('trivia'),
  math = document.getElementById('maths'),
  year = document.getElementById('year');


search.addEventListener('keyup', requestFact);

function getSpecificFact(value, TYPE) {
  if (value !== '') {
    number.getFact(value, TYPE)
      .then(data => {
        if (data.fact === "Cannot GET /" + TYPE) {
          ui.showAlert('Type valid number', 'alert alert-danger');
        } else {
          ui.showFact(data.fact);
        }
      });
  } else {
    ui.clearFact();
  }
}

function requestFact(e) {
  const value = e.target.value;
  if (trivia.checked) {
    getSpecificFact(value, 'trivia')
  } else if (math.checked) {
    getSpecificFact(value, 'math')
  } else {
    getSpecificFact(value, 'year')
  }
}