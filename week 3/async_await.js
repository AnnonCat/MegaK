/**
 const url = 'https://www.googleapis.com/books/v1/volumes?q=3-932949-11-0'
 const request = fetch(url);
 const jsonFormat = response => response.json();
 const whichData = data => console.log(`Tytuł: ${data.items[0].volumeInfo.title} \n
 Autor: ${data.items[0].volumeInfo.authors}`);
 const error = error => console.log(error);
 request.then(jsonFormat).then(whichData).catch(error);
 **/

const fetch = require('node-fetch');
const isbn = "3-932949-11-0";
(async () => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${isbn}`)
        const data = await response.json();
        console.log(`Tytuł: ${data.items[0].volumeInfo.title},
    Autor: ${data.items[0].volumeInfo.authors}`);
    } catch (error) {
        console.log(error);
    }
})();