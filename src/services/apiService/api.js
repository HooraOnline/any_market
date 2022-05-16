//export const getCategoriesFromApi=()=>fetch('https://apitester.ir/api/Categories');


import apiRequest from './apiRequest';
import formatParams from './formatParams';
export const FETCH_POSTS_ENDPOINT = '/posts';
export const getCategoriesFromApi=(params)=>apiRequest.get(FETCH_POSTS_ENDPOINT)
    .then(response => ({ response }))
    .catch(error => ({ error }));

export const createCategoriesFromApi=(params)=>apiRequest.post(FETCH_POSTS_ENDPOINT,formatParams(params))
    .then(response => ({ response }))
    .catch(error => ({ error }));


/*let xx=[{title:'rrrr'}]
let ss=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(xx);
        xx.push({title:Math.random().toString()})
    }, 3000);
})
export const getCategoriesFromApi=(params)=> ss
    .then(response => ({ response }))
    .catch(error => ({ error }))*/
