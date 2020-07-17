#Crawler - films


MORE FEATURES COMMING SOON 

**Config**

**Pricipal Element** - elemet that contains all tr's tag


**titleClass** - class that contains the title of films 


**rating** - class that contains rating films 




    const  config  = {
	    urlTopFilms:  'https://www.imdb.com/chart/top/',
	    urlMostPopular:  'https://www.imdb.com/chart/moviemeter',
	    principalElement:  '.lister-list tr',
	    titleClass:  '.titleColumn a',
	    rating:  '.imdbRating strong'
    }

**FetchData** fuction 
function return the response with all html of page

    const  fetchData  =  async(url)=>{
    const  result  =  await  axios.get(url);
    return  result.data;
    }

**topRateFilms** function 
function show topFilms with rate on console

**mostPopulrFilms**
function returns most popular films on console



## NEW FEATURES IS COMMING SOON 
