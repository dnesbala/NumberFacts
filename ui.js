class UI {
  constructor() {
    this.result = document.getElementById('result');
  }

  showFact(fact) {
    this.result.innerHTML =
      `<div class="card card-body bg-dark text-white">
      <h3 class="text-center"><u>Fact : </u></h3>
      <p class="lead text-center p-3">${fact}</p>
    </div>`;
  }


  clearFact() {
    this.result.innerHTML = '';
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const searchContainer = document.getElementById('searchContainer');
    const search = document.getElementById('search');
    searchContainer.insertBefore(div, search);

    setTimeout(this.clearAlert, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}