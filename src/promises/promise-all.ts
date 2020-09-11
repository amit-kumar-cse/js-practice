import nodeFetch from 'node-fetch';

const names = ['iliakan', 'remy', 'jeresig'];

const requests = names.map(name => nodeFetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        // all responses are resolved successfully
        for(const response of responses) {
            console.log(`${response.url}: ${response.status}`); // shows 200 for every url
        }

        return responses;
    })
    // map array of responses into an array of response.json() to read their content
    .then(responses => Promise.all(responses.map(r => r.json())))
    // all JSON answers are parsed: "users" is the array of them
    .then(users =>
        {
            for(const user of users) {
                console.log(user.name, user.avatar_url);
                // console.log(user.avatar_url);
            }
        }
    );


// case when one promise fails
// lesson: one one promise fail, promise.all fails.
const promise = Promise.all([
    new Promise((resolve, reject) => {setTimeout(() => resolve(1), 0)}),
    new Promise((resolve, reject) => {setTimeout(() => reject(new Error('Failed')), 1)})
]);

promise.then(
    result => console.log(JSON.stringify(result)),
    error => console.error(error)
);
