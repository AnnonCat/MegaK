/**
 Przyjmij w przeglądarce przez prompt-a ISBN. Następnie korzystając z poniższego API:
 https://www.googleapis.com/books/v1/volumes?q=isbn i na końcu numer ISBN.
 Wyświetl zwracane dane. Wyświetl w konsoli autora i tytuł książki.
 **/

const url = 'https://www.googleapis.com/books/v1/volumes?q=3-932949-11-0'

const request = fetch(url);
const jsonFormat = response => response.json();
const whichData = data => console.log(`Tytuł: ${data.items[0].volumeInfo.title} \n
Autor: ${data.items[0].volumeInfo.authors}`);
const error = error => console.log(error);

request.then(jsonFormat).then(whichData).catch(error);