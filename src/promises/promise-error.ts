import nodeFetch from 'node-fetch';

nodeFetch('https://no-such-server.blabla') // rejects
    .then((response: any) => response.json())
    .catch((err: any) =>
    {
        console.log('failed to fetch data from this url');
        console.error(err)
    });

