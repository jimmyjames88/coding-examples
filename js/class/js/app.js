class Car {
    make = '';
    model = '';
    year = '';
    color = '';
    speed = 0;
    topSpeed = 0;

    constructor(carMake, carModel, carYear, carColor, carTopSpeed) {
        this.make = carMake;
        this.model = carModel;
        this.year = carYear;
        this.color = carColor;
        this.topSpeed = carTopSpeed;
    }

    accelerate() {
        // this.speed += 20;
        this.speed = this.speed + 20;
        if (this.speed > this.topSpeed) {
            this.speed = this.topSpeed;
        }
        console.log('The current speed is now: ' + this.speed);
    }

    decelerate() {
        this.speed = this.speed - 20;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log('The current speed is now: ' + this.speed);
    }

    honkHorn(amount) {
         for (let i = 0; i < amount; i++) {
             console.log('Honk honk');
         }
    }
}

let car1 = new Car('Acura', 'RSX', 2003, 'Black', 200);
console.log(car1);

let car2 = new Car('Mitsubishi', 'Lancer EVO', 1999, 'White', 230);
console.log(car2);



/*
i. Modify the Car class to accept a constructor argument for a topSpeed
ii. Modify the accelerate() method to disallow the speed from exceeding the topSpeed
*/