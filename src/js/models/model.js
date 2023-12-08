import { API_URL } from './../config/config.js';
import { getJSON, randomNumberGeneratro } from './../helpers/helpers.js';
import { async } from 'regenerator-runtime';

export const state = {
  quotes: [],
};

export const getQuote = async function () {
  try {
    const data = await getJSON(API_URL);

    state.quotes = data;
  } catch (error) {
    throw error;
  }
};

export const randomChoosedQuote = function (arr) {
  try {
    const number = randomNumberGeneratro(0, arr.length);
    const quote = arr[number];

    return quote;
  } catch (error) {
    throw error;
  }
};
