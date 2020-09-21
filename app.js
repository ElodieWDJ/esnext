let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId =["paris", "nyc", "rome", "rio-de-janeiro",];
console.log(citiesId);

//citiesId =[];

// ajout d'un élément au tableau
citiesId.push('tokyo');
console.log(citiesId);

// création d'un objet
function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature};
}

const weather = getWeather(favoriteCityId);
    console.log(weather);

//affectation destructurée
const{
    city: cityAffecte,
    temperature: temperatureAffecte
} = weather;

console.log(cityAffecte);
console.log(temperatureAffecte);

//Rest operator
const[parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

//Classe
class Trip{
    constructor(id,name,imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString(){
        return 'Trip[' + this.id+', ' + this.name + ', ' + this.imageUrl + ',' + this._price + ']'
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }

    static getDefaultTrip(){
        return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg");
    }
}
const parisTrip = new Trip("paris", "Paris", "mg/paris.jpg" );
console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

//héritage

class FreeTrip extends Trip{
    constructor(id, name, imageUrl){
        super(id, name, imageUrl)
        this._price = 0;
    }
    toString(){
        return "Free" + super.toString();
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());

//Promise, Set, Map, Arrow Function

class TripService {
    constructor() {
    this.trip = new Set();
    this.trip.add =(new Trip('paris', 'Paris', 'img/paris.jpg'));
    this.trip.add =(new Trip('nantes','Nantes', 'img/nantes.jpg'));
    this.trip.add =(new Trip('rio-de-janeiro', 'Rio-de-Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
    // ici l'exécution du code est asynchrone
    // TODO utiliser resolve et reject en fonction du résultat de la
    //recherche
        for(let trip of this.trips){
            if (trip.name === tripName){
                resolve(trip);
            }

        }
        reject("No trip found whith name ${tripName}")

    }, 2000)
    });
    }
    }
const tripSrv = newTripService();
tripSrv.findByName("Paris")
    .then(tripFound => console.log(tripFound))
    .catch(err =>console.log(err))

    class PriceService {
    constructor() {
        this.price = new Map();
        this.price.set('paris', 100);
        this.price.set('rio-de-janeiro', 800);
    
    // no price for 'nantes'
    }
    findPriceById(tripId) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
    // ici l'exécution du code est asynchrone
     // TODO utiliser resolve et reject en fonction du résultat dela recherche
        const price = this.priceMap.get(tripId);

        if(price){
            resolve(price);
        }else{
            reject("No price found for id= ${tripId}");
        }
   
    
    }, 2000)
    });
    }
    }
    const priceSrv = new PriceService();
priceSrv.findPriceById('paris')
    .then(price => console.log('price =', price))
    .catch(err => console.log(err));
priceSrv.findPriceByTripId('nantes')
    .then(price => console.log('price =', price))
    .catch(err => console.log(err));

const tripName = 'Toulouse';


tripSrv.findByName(tripName)
    .then(tripFound => priceSrv.findPriceByTripId(tripFound.id))
    .then(price => console.log('\\o/ price =', price))
    .catch(err => console.log(err));