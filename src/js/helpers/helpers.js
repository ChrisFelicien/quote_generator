export const getJSON = async function (url) {
  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok)
      throw new Error(`Sorry we some problem with fetching quote`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const randomNumberGeneratro = function (min = 0, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
