// VARIABLE DECLARATION

var variable = 'string';
const anotherVariable = 'string';
let yetAnotherVariable = 'string';


//DESTRUCTURING

const myObj = { x: 42, y: 88, z: 99 };
// const x = myObj.x;
// const y = myObj.y;
// const z = myObj.z;

const { x, y, z } = myObj;

const anotherObj = { x: { y: { b: 99 } }, z: 99 };
// const y = anotherObj.x.y;

const {
    y: {
        b: thisIsB
    }
} = anotherObj.x;

const array = [1, 2, 3, 4, 5, 6, 7];
// const one = array[0];
// const two = array[1];
// const three = array[2];

const [one, two, three, ...allTheRest] = array;

Promise.all([
    PromiseOne(),
    PromiseTwo()
]).then(function(data) {
   const [ promiseOneData, promiseTwoData ] = data;
})

//CLASSES

class User /* extends Something optional */ {
   //Extends makes User inherit from Something
   constructor() {
       /* super(); optional if extends was used */
       this.name = 'will';
   }

   sayHi() {
       return 'Hi';
   }

   sayBye() {
       return 'Bye';
   }
};


//FAT ARROW

router.get('/', function(req, res) {
    res.send('hello');
});

router.get('/', (req, res) => res.send('hello'))

node.addEventListner('click', function(e) {
    console.log(this);
})

node.addEventListner('click', e => console.log(this))


// ASYNC AWAIT

PromiseOne().then(function(data) {
    console.log(data);
}).catch(function(e) {
    console.log(e);
});

router.get('/', async function (req, res) {
    try {
        const data = await PromiseOne();
        const dataTwo = await PromiseTwo();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
})
