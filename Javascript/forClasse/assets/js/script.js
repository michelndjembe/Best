class vehicule{
    mark;
    model;
    id;
    motor;
    numberOfplace;
    highSpeed;
    color;
    brake;
    counter = new Number;
    
    constructor (mark,model,id,motor,numberOfplace,highSpeed,color,brake) {
        this.mark = mark;
        this.model = model;
        this.id = id;
        this.motor = motor;
        this.numberOfplace = numberOfplace;
        this.highSpeed = highSpeed;
        this.color = color;
        this.brake = brake;
        this.start();
    }
    
    destructor() {
        this.stop();
    };
    
    
    start() {
        console.log(`The state of the car ${this.id} start`);
        
        console.log(`This is the ${this.counter} instance`);
    }

    stop (){
        console.log(`The state of the car ${this.id} stop`);
    }
}


let firstCar = new vehicule('Toyota','ts033','0002031','turbo motor','5','230km/s','red','highclass');
let secondCar = new vehicule('Toyota','ts033','0002042','turbo motor','5','230km/s','red','highclass');
let thirdCar = new vehicule('Toyota','ts033','0002042','turbo motor','5','230km/s','red','highclass');
console.log(firstCar);