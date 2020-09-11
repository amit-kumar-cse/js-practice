import nodeFetch from 'node-fetch';

async function loadData(url: string) {
    const response = await nodeFetch(url);
    if(response.status === 200) {
        return response.text();
    }
    throw new Error(response.status.toString());
}

loadData('https://www.google.com').then(console.log);
