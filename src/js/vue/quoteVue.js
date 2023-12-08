class QuoteVue {
  _parentElement = document.querySelector('.quote-container');

  render(quote) {
    this._clearParentElement();
    this._parentElement.classList.add('quote-container');
    this._parentElement.insertAdjacentHTML('afterbegin', this._markup(quote));
  }

  loader() {
    this._clearParentElement();
    this._parentElement.insertAdjacentHTML('afterbegin', this._spiner());
    this._parentElement.classList.remove('quote-container');
  }

  _spiner() {
    return `<i class="fa-solid fa-circle-notch"></i>`;
  }

  _clearParentElement() {
    return (this._parentElement.innerHTML = '');
  }

  _markup(quote) {
    return `
    <div class="quote-text">
        <i class="fa-solid fa-quote-left"></i>
        <span id="quote"= >${quote.text}</span>
    </div>
    <div class="quote-author">
        <span id="author">${quote.author}</span>
    </div>
    <div class="button-container">
        <button class="twitter-btn" id="twitter" title="tweet this">
            <i class="fa-brands fa-x-twitter"></i>
        </button>
        <button id="new-quote" class="new-quote">New quote</button>
    </div>
    `;
  }

  addLoadHandler(handler) {
    window.addEventListener('load', handler);
  }

  addClickHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const clickedButton = e.target.closest('button');

      if (!clickedButton) return;

      if (clickedButton.classList.contains('new-quote')) handler();

      console.log(`New tweet`);
    });
  }
}

export default new QuoteVue();
