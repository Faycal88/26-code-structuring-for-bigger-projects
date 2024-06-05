export default class Robot {

    constructor(name, legs){

        this.name = name;
        this.legs = legs;

        console.log(`New Robot Created! , ${name}`);

        /* this.sayHi(); */
    }

    sayHi(){
        console.log(`Hello my name is ${this.name}`);
    }
}
