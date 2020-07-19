const cheerio = require('cheerio');
const axios = require('axios');
const config = require('./config')

const fetchData = async(url)=>{
    const result = await axios.get(url);
    return result.data;
}
const topRateFilms = async() =>{
    const content = await fetchData(config.urlTopFilms);
    const $ = cheerio.load(content)
    let topfilmsArray = [];

    $(config.principalElement).each(function(){
        var title = $(this).find(config.titleClass).text().trim();
        var rating = $(this).find(config.rating).text().trim();
        topfilmsArray.push(title,rating)
    })
    return topfilmsArray;
}


const mostPopularFilms = async() =>{
    console.log('MOST POPULAR FILMS:\n')
    const content = await fetchData(config.urlMostPopular);
    const $ = cheerio.load(content)
    let mostPopArray = [];

    $(config.principalElement).each(function () {
        var title = $(this).find(config.titleClass).text().trim();
        var rating = $(this).find(config.rating).text().trim();
        mostPopArray.push(title, rating);
    })
   return mostPopArray;
    
}

