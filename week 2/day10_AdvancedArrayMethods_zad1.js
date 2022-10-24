/**
 * Używaj w zadaniach metod tablicowych!
 * 1. Wylicz średnią ocen.
 * 2. Następnie wypisz wszystkie oceny min. 4.


const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];


// 3. Napisz kod, który za pomocą jednego ciągu (możesz skorzystać z programowania funkcyjnego i rozdzielić na funkcje) osiągnie następujący efekt:
// Wyświetli pojedynczo każdą nazwę miasta, która ma parzystą liczbę znaków. Nazwy miast powinny być pisane wielkimi literami.

const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];
 */

const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

let gradesAverage = 0;
grades.forEach((grade, i) => gradesAverage += grades[i]/grades.length);

const newGrades = grades.filter(grade => grade >= 4);

console.log(gradesAverage); //Średnia
console.log(newGrades); //Oceny min. 4

//

const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];

const even = city => city.length % 2 === 0;
const toUpperCase = city => city.toUpperCase();
const show = city => console.log(city);

cities.filter(even).map(upperCase).forEach(show); //Parzysta liczba znaków + nazwy miast pisane Wielkimi literami