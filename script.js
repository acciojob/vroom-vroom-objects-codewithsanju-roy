function Car(make, model) {
      this.make = make;
      this.model = model;
    }

    Car.prototype.getMakeModel = function () {
      return `${this.make} ${this.model}`;
    };

    function SportsCar(make, model, topSpeed) {
      Car.call(this, make, model); // Inherit Car properties
      this.topSpeed = topSpeed;
    }


    SportsCar.prototype = Object.create(Car.prototype);
    SportsCar.prototype.constructor = SportsCar;

    SportsCar.prototype.getTopSpeed = function () {
      return this.topSpeed;
    };


    function createCar() {
      const make = document.getElementById('make').value;
      const model = document.getElementById('model').value;
      const topSpeed = Number(document.getElementById('topSpeed').value);

      const car = new SportsCar(make, model, topSpeed);

      const output = `
        <strong>Make & Model:</strong> ${car.getMakeModel()}<br>
        <strong>Top Speed:</strong> ${car.getTopSpeed()} kmph
      `;

      document.getElementById('output').innerHTML = output;
    }