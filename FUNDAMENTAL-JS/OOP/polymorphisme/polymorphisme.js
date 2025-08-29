// class SmartPhone {
//     constructor(color, model, brand) {
//         this.color = color;
//         this.model = model;
//         this.brand = brand;
//     }

//     charging() {
//         console.log('ngecas');
//     }
// }

// class Android extends SmartPhone {
//     //overriding constructor
//     constructor(color, model, brand, device) {
//         super(color, model, brand);
//         this.device = device;
//     }

//     splitScreen() {
//         console.log('splitskrin');
//     }
// }

// const android = new Android('white', 'A', 'Galaxy Prime', 'smart TV');
// console.log(android);

//Ketika melakukan overriding constructor, kita wajib memanggil method super() 
// di dalam constructor. Hal ini digunakan untuk menandakan apa saja property yang 
// diturunkan dari SuperClass. Di contoh, property yang diturunkan adalah color, brand, dan model.
//  Jika tidak memanggil method super(), akan terjadi error Referrence Error.


//======== OVERRIDING METHOD ==========
// class Android extends SmartPhones {
//   constructor(color, brand, model, device) {
//     super(color, brand, model);
//     this.device = device;
//   }
 
//   charging() {
//     console.log(`Charging ${this.model} with fast charger`);
//   }
 
//   splitScreen() {
//     console.log('Android have a Split Screen');
//   }
// }

//  Kita menulis ulang method charging() dengan implementasi spesifik di SubClass Android. Berbeda dengan
//  overriding constructor, overriding method tidak wajib untuk menulis method super(). Namun, jika Anda
//  butuh untuk memanggil method charging() dari SuperClass bersamaan dengan method charging yang sudah 
//  di-override, hal itu dapat dilakukan dengan memanggil method super() seperti contoh berikut.

class Sumaho {
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log('ngecas ' + this.model);
    }
}

class Anduroido extends Sumaho {
    constructor(color, brand, model, device){
        super(color, brand, model);
            this.device = device;
    }

    charging(){
        super.charging();
        console.log('casan ngebutt ' + this.model + ' gacor cik');
    }

    splitScreen(){
        console.log('splitskirn');
    }
}

const anduroido = new Anduroido('putih', 'Samsung', 'Promax', 'HP');
anduroido.charging();




