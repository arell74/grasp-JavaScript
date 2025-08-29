import { makeCoffee, sendCoffee, bayarJir } from "./coffee.mjs";

console.log('Saya memesan kopi');

makeCoffee(() => {
    sendCoffee(() => {
        console.log('Pramusaji memberikan kopi.');
        bayarJir(() => {
            console.log('Anda dapet kopi dan menghabiskannya cihuyy');
        });
    });
    
});