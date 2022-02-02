class Transport {
    constructor(type, name, model) {
        this.type = type;
        this.name = name;
        this.model = model;
    }

    startEngine(){
        console.log(`engine on ${this.type}`)
    }
}

class Car extends Transport{
    constructor(type, name, model, volume, maxSpeed) {
        super(type, name, model);
        this.volume = volume;
        this.maxSpeed = maxSpeed;
    }
    startEngine(){
        console.log(`engine on ${this.name} started!\nVolume: ${this.volume}`)
    }
}

const bmw = new Car("car", "BMW", "E38", 450, 200);
console.log(bmw);
bmw.startEngine();

class WaterTransport extends Transport{
    constructor(type, name, model,consumption,) {
        super(type, name, model);
        this.consumption = consumption;
    }

    startEngine() {
        console.log(`engine on ${this.name} ${this.model}`)
    }
}


const waterTransport = new WaterTransport("waterTransport", "Liner","S80", 'coal');
console.log(waterTransport);
waterTransport.startEngine();
