import { makeCoffee, sendCoffee } from "./error-handling.mjs";

const order = 'Kopi expresso';

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
    if(makeCoffeeError) {
        console.log(makeCoffeeError);
        return;
    }

    sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
        if(sendCoffeeError) {
            console.log(sendCoffeeError);
            return;
        }

        console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan`);
        console.log(`Saya mendapatkan ${makeCoffeeData} dan menghabiskannya`);
    });
});