//class SuperClass() { }

//class SubClass() { }

// ======== NOTE ==========
// Di OOP, inheritance memungkinkan class untuk mewarisi property dan method yang dimilikinya
//  sehingga membantu mengurangi penulisan kode secara berulang (mengurangi redundancy kode).
//  Misalnya, ketika kita membuat sebuah class dengan property dan method, keduanya dapat digunakan kembali oleh class lainnya melalui inheritance.

class SmartPhone {
    constructor(color, model, brand) {
        this.color = color;
        this.model = model;
        this.brand = brand;
    }

    charging () {
        console.log('Charging' + this.model);
    }
}

class iOS extends SmartPhone {
    airDrop() {
        console.log('iOS Have a behavior AirDrop');
    }
}

class Android extends SmartPhone {
    splitScreen() {
        console.log('Android Have a Split screen');
    }
}

const ios = new iOS('Black', 'A', 'Promax');
const android = new Android('Blue', 'S', 'Samsung');

ios.charging();
ios.airDrop();

android.charging();
android.splitScreen();

console.log(ios);

// SOAL 
class Animal {
  constructor(name, age, isMammal){
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true);
  }
  eat(){
    return `${this.name} sedang makan`;
  }
}

class eagle extends Animal {
  constructor(name, age) {
    super(name, age, false);
  }
  fly(){
    return `${this.name} sedang terbang!`
  }
}

const myRabbit = new rabbit('Labi', 2);
const myEagle = new eagle('Elo', 4);

console.log(myRabbit);
console.log(myEagle);