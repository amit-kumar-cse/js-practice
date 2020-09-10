import nodeFetch from 'node-fetch';

nodeFetch('https://www.google.com')
    .then(response => response.text())
    .then(user => nodeFetch(`https://www.yahoo.com`))
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
