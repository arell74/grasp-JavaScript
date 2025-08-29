class CoffeeMachine {
    #temperature = 90;

    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.#temperature = this.#defaultTemperature();
    }

    set temperature(temperature) {
        console.log("You're not allowed to change temperature");

    }

    get temperature() {
        return this.#temperature
    }

    #defaultTemperature() {
        return 90;
    }
}

const coffee = new CoffeeMachine(80);
console.log('Sebelum diubah: ', coffee.temperature);
coffee.temperature = 100;
console.log('Setelah diubah: ', coffee.temperature);