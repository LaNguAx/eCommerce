import { TIMEOUT_SEC } from './config.js';

const timeout = function (time) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('The request timed out! The request took too long!'));
    }, time * 1000);
  });
};

export const AJAX = async function (url, options, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // send data in json format
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url, options);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (error) {
    // rethrowing the error in order to handle it in the original loadRecipe async function which is calling the getJSON.
    throw error;
  }
};
