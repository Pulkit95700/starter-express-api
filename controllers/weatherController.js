const {getCityData} = require("../utils/cityData");


const sendPage = async (req, res, next) => {
    let {page, limit} = req.query;

    const data = await getCityData();           // getting data from the api

    if(!page) page = 1;
    if(!limit) limit = 10;

    page = parseInt(page);
    limit = parseInt(limit);

    const responseData = data.filter((city, index) => {
        return ((index < ((page-1)*limit + limit)) && index >= (page-1)*limit)
    });

    res.send({
        page,
        limit,
        data: responseData
    });
}

module.exports.sendPage = sendPage;