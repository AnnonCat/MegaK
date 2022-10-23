class Country {
    constructor() {
        this.place = [];
    };

    whichPlace(CountryCompetitionPlace) {
        this.place.push(CountryCompetitionPlace);
    };

    isFirstPlace() {
        for(let i = 0; i < this.place.length; i++) {
            if(this.place[i] === 1){
                console.log('Brawo!');
            }
        }
    };
}

const poland = new Country();
const germany = new Country();

poland.whichPlace(9);
poland.whichPlace(8);
poland.whichPlace(7);
poland.whichPlace(2);
poland.whichPlace(1);
poland.whichPlace(3);

germany.whichPlace(2);
germany.whichPlace(6);
germany.whichPlace(2);
germany.whichPlace(5);
germany.whichPlace(3);
germany.whichPlace(7);

console.log(poland.place);
console.log(germany.place);

poland.isFirstPlace();
germany.isFirstPlace();

/**
 * 1. Usuń konstruktor, metody i wszystko po klasie z rzeczy, które pisaliśmy wspólnie.
 * 2. Stwórz właściwość przechowującą zajęte miejsca w zawodach.
 * 3. Stwórz metodę, która pozwoli dodać nowe zajęte miejsce do właściwości danego obiektu.
 * 4. Stwórz dwa obiekty reprezentujące 2 kraje i dodaj do nich kilka zajętych miejsc, używając przygotowanej przes siebie metody możesz ją wywoływac wielokrotnie).
 * 5.* Dodaj metodę, która sprawdzi czy kraj posiada jakiekolwiek pierwsze miejsce i jeżeli tak to wyświetl "Brawo!".
 */