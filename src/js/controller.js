import 'regenerator-runtime/runtime.js';
import 'core-js/actual';
import * as model from './models/model.js';
import { async } from 'regenerator-runtime';
import quoteVue from './vue/quoteVue.js';

const getQuoteController = async function () {
  try {
    quoteVue.loader();
    await model.getQuote();
    const quote = model.randomChoosedQuote(model.state.quotes);

    quoteVue.render(quote);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  quoteVue.addLoadHandler(getQuoteController);
  quoteVue.addClickHandler(getQuoteController);
};

init();
