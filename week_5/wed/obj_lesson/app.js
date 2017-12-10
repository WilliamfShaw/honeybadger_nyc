const mustage = {
    color: 'blue',
    class: 'muscle',
    horsepower: 450
}

const toyota = {
    color: 'blue',
    class: 'sport',
    horsepower: 1000
}

const gallardo = {
    color: 'blue',
    class: 'exotic',
    horsepower: 5
}

mustage.horsepower();
mustage["horsepower"];



// MODEL A LAMP

// the lamp should have the following attributes: 

// wattage - a number
// on - a boolean

// the lamp should have the following behaviors

// turnOff - should set the on attribute to false
// turnOn - should set the on attribute to true
// status - should let the owner know if the light is on or off







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



const pickachu = {
    number: 1,
    name: 'pickachu',
    type: 'Fire',
    moves: ['jump','swim','kick','fly'],
    hp: 100,
    takeDamage: function(){
         this.hp -= 10; 
         if(this.hp < 0){

            this.hp = 0;
         }
    },
    visitPokeCenter: function (){
        this.hp = 100;
    },
    isFainted: function (){
        return this.hp <= 0;
    }
}

// / MAKE A POKEMON FACTORY USING THE SAME ATTRIBUTES AND BEHAVIORS FROM BEFORE

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

function Pokemon(number, name, type, hp){
    this.number = number;
    this.name = name;
    this.type = type;
    this.hp = hp;
}

const cookie = new Pokemon(10, "Girl", "Fire", 150);

function Minion(numberOfEyes, color, name){
    this.numberOfEyes = number;
    this.name = name;
    this.type = type;
    this.hp = hp;
}

    number: 1,
    name: 'pickachu',
    type: 'Fire',
    moves: ['jump','swim','kick','fly'],
    hp: 100,