import Robot from './Robot'

export default class FlyingRobot extends Robot{


    constructor(name,legs){
        super(name , legs)

        super.sayHi() // base class method call

        /* this.sayHi() */ // current class methid call

    }

    sayHi(){
        console.log('something else');
    }

    takeOff(){
        console.log(`have a good flight ${this.name}`);
    }

    landing(){
        console.log(`Welcome back to base ${this.name}`);
    }

}