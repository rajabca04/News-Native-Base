import { API_KEY, endpoint, country} from '../config/config';


export async function services(_category ='general') {
    let articles = await fetch(`${endpoint}?country=${country}&{category}`,{
    headers:{
        'X-API-KEY':API_KEY
    }
    });
   
    let result = await articles.json;
    articles = null;
    return result.articles;
}

