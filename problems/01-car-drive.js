class Car {
  constructor(speed = 0) {
    this.speed = speed;
  }
  drive(newSpeed) {
    this.speed = newSpeed;
    return this.speed;
  }
}

// let newCar = new Car();
// newCar.drive(10);
// console.log(newCar);
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Car;
} catch {
  module.exports = null;
}
