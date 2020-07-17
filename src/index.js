const cheerio = require('cheerio');
const axios = require('axios');
// Config webScraping
const config = {
    urlTopFilms: 'https://www.imdb.com/chart/top/',
    urlMostPopular: 'https://www.imdb.com/chart/moviemeter',
    principalElement: '.lister-list tr',
    titleClass: '.titleColumn a',
    rating: '.imdbRating strong'
}
const fetchData = async(url)=>{
    const result = await axios.get(url);
    return result.data;
}
const topRateFilms = async() =>{
    const content = await fetchData(config.urlTopFilms);
    const $ = await cheerio.load(content)
    $(config.principalElement).each(function(){
        var title = $(this).find(config.titleClass).text().trim();
        var rating = $(this).find(config.rating).text().trim();
        console.log('TÍTULO: '+ title + ' | '+ 'Nota: ' + rating);
    })
}


const mostPopulrFilms = async() =>{
    console.log('MOST POPULAR FILMS:\n')
    const content = await fetchData(config.urlMostPopular);
    const $ = await cheerio.load(content)
    $(config.principalElement).each(function(){
        var title = $(this).find(config.titleClass).text().trim();
        var rating = $(this).find(config.rating).text().trim();
        var rating = $(this).find(config.rating).text().trim();
        console.log('TÍTULO: '+ title + ' | '+ 'Nota: ' + rating);
    })
}

mostPopulrFilms();



