class Dealer {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.cars = [];
    }

    sayHi() {
        return `Hi, my name is ${this.name}!`;
    }

    formatMoney(EUR) {
        return `${EUR.toLocaleString('de-DE')}`
    }

    getCar(carName, carPrice) {
        let newCar = {
            name: carName,
            price: carPrice,
        }
        this.cars.push(newCar)
        return `New car everyone! ${carName} for only ${this.formatMoney(carPrice)} ${this.currency}`

    }

    carList() {
        let list = '';
        let i = 0;
        for (const car of this.cars) {
            list += `\n${++i}. ${car.name} ${this.formatMoney(car.price)} ${this.currency}`;
        }
        return `${this.name}'s car dealership:
        \n==========================${list}`;
    }

    changeCarPrice(index, newPrice) {
        return `New ${this.cars[index]} price is ${newPrice}`
    }

    sellCar() {

    }

    fortune() {

    }

    changeCarPrice() {

    }


}


export { Dealer }