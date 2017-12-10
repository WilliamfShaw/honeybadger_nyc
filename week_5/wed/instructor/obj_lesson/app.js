const obj = {
    tacos: 'tacos',
    helloPizza: 'hello',
    "taco-pizza": 'not-valid'
}

const person = {
    name: 'will',
    age: 99,
    hobbies: ['coding', 'sports'],
    sayHello: function () {
        console.log('hello');
    }
}

person.makeTacos = function () {
    console.log('making tacos');
}

// make an object called mustang with the following attributes
// color
// class set to muscle
// horsepower

const mustang = {
    colorOJHFAKJDAHFJK: 'blue',
    class: 'muscle',
    horsepower: 450,
    paint: function (newColor) {
        this.color = newColor;
    },
    increaseHorsepower: function () {
        this.horsepower += 5;
    }
}

mustang.horsepower;
mustang['horsepower'];

// make an object called toyota with the following attributes
// color
// class set to sport
// horsepower

const toyota = {
    color: 'blue',
    class: 'sport',
    horsepower: 1000
}

toyota.color = 'yellow';

// make an object called gallardo with the following attributes
// color
// class set to exotic
// horsepower

const gallardo = {
    color: 'purple',
    class: 'exotic',
    horsepower: 5
}

gallardo.horsepower = 200;


// MODEL AN APARTMENT BUILDING

// MODEL A LAMP

// the lamp should have the following attributes:

// wattage - a number
// on - a boolean

// the lamp should have the following behaviors

// turnOff - should set the on attribute to false
// turnOn - should set the on attribute to true
// status - should let the owner know if the light is on or off

const lamp = {
    wattage: 250,
    on: 'waffles',
    turnOff: function () {
        this.on = false;
    },
    turnOn: function () {
        this.on = true;
    },
    status: function () {
        if (this.on) {
            console.log('the light is on');
        } else {
            console.log('the light is off');
        }
    }
}

// MODEL A POKEMON

// ATTR

// number - num
// name - str
// type - str
// moves - array
// hp - num starting at 100

// behaviors

// takeDamage - should decrease hp by 10
// visitPokeCenter - restores hp to 100
// isFainted - return true if hp is less than or equal to 0
//           - return false if hp is greater than 0


const bulbasaur = {
    number: 1,
    name: 'Bulbasaur',
    type: 'grass',
    moves: ['tackle', 'vine whip', 'scratch', 'leech seed'],
    hp: 100,
    takeDamage: function () {
        this.hp -= 10;
        if (this.hp < 0) {
            this.hp = 0;
        }
    },
    visitPokeCenter: function () {
        this.hp = 100;
    },
    isFainted: function () {
        return this.hp <= 0;
    }
}



// CONSTRUCTORS

function Car(color, make, model = 'ford', horsepower = 0) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.horsepower = horsepower;
}

Car.prototype.paint = function (newColor) {
    this.color = newColor;
}

Car.prototype.increaseHorsepower = function () {
    this.horsepower += 5;
}


// MAKE A POKEMON FACTORY USING THE SAME ATTRIBUTES AND BEHAVIORS FROM BEFORE

// MAKE A MINION FACTORY

// attr

// name
// numberOfEyes
// color

// behavior

// eatBanana
// performEvilTask
// changeNumberOfEyes
// changeColors
