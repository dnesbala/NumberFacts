// Initialize instances
const number = new Number;
const ui = new UI;

const search = document.getElementById('search'),
  trivia = document.getElementById('trivia'),
  math = document.getElementById('maths'),
  year = document.getElementById('year');


search.addEventListener('keyup', requestFact);

function requestFact(e) {
  const value = e.target.value;
  if (trivia.checked) {
    if (value !== '') {
      number.getFact(value, 'trivia')
        .then(data => {
          if (data.fact === "Cannot GET /trivia") {
            ui.showAlert('Type valid number', 'alert alert-danger');
          } else {
            ui.showFact(data.fact);
          }
        });
    } else {
      ui.clearFact();
    }
  } else if (math.checked) {
    const value = e.target.value;
    if (value !== '') {
      number.getFact(value, 'math')
        .then(data => {
          if (data.fact === "Cannot GET /math") {
            ui.showAlert('Type valid number', 'alert alert-danger');
          } else {
            ui.showFact(data.fact);
          }
        });
    } else {
      ui.clearFact();
    }
  } else {
    const value = e.target.value;
    if (value !== '') {
      number.getFact(value, 'year')
        .then(data => {
          if (data.fact === "Cannot GET /year") {
            ui.showAlert('Type valid number', 'alert alert-danger');
          } else {
            ui.showFact(data.fact);
          }
        });
    } else {
      ui.clearFact();
    }
  }
}