import axios from 'axios';

const instance = axios.create({
    baseURL: '/lawnmowers',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    }
    
});

export async function getLawnmower() {
    //await delay(1000);
    return (await instance.get()).data;
}

export async function getLawnmowerById(id) {
    //await delay(1000);
    return (await instance.get(`/${id}`)).data;
}

export async function getFilteredLawnmowers(bladeType, battery) {
    //await delay(1000);
    return (await instance.get(`/filters?blade=${bladeType}&battery=${battery}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}