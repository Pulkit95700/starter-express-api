require("dotenv").config();
const axios = require("axios");
const citiesId1 = [
    1266209,   
    1269843,
    1269655,	
    1272508,
    1275004,
    1275339,
    1275841,
    1264733,
    1275817,
    1256523,
    1269771,
    1279186,
    1256237,
    1269006,
    1258526,
    1699805,
]

const citiesId2 = [
    1255634,
    1264527, 
    1260607,
    1274746,
    1260086,
    1258980,
    1271715,
    1256523,
    1266366,
    1279290,
    1273313,
    1271631,
    1269515,
    1254163,
]

// calling the api two times for both queries as it can only send 20 cities data at a single fetch 

const query1 = citiesId1.join(",");
const query2 = citiesId2.join(",");

const url1 = `https://api.openweathermap.org/data/2.5/group?id=${query1}&appId=${process.env.API_KEY}`
const url2 = `https://api.openweathermap.org/data/2.5/group?id=${query2}&appid=${process.env.API_KEY}`

const getCityData = async () => {
    
    const res1 = await axios({
        method: 'get',
        url: url1,
    });

    const res2 = await axios({
        method: 'get',
        url: url2,
    })


    const res = [
        ...res1.data.list,
        ...res2.data.list
    ]

    return res;
}

module.exports = {getCityData};