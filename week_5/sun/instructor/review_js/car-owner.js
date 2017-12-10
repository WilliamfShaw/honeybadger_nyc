class CarOwner extends Person {
    constructor(name, age, height, numberOfCars = 0) {
        super(name, age, height);
        this.numberOfCars = 0;
    }

    buyCar(make, model, color) {
        this.car = new Car(make, model, color);
        this.numberOfCars += 1;
    }
}
