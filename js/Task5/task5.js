// OOP

// class User {
//     hello = 'Hello'
//     constructor(name) {
//         this.name = name
//     }

//     getHello() {
//         console.log(this.hello);
//     }
// }

// let test = new User('Ruslan');
// test.getHello();

// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.

// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

class Computer {
    constructor(name, ram, power_cpu) {
        this.name = name;
        this.ram = ram;

        if (power_cpu >= 0 && power_cpu <= 1000) {
            this.power_cpu = power_cpu;
        } else {
            this.power_cpu = 0;
        }

        this.__isOn = false;
    }

    switchOnOrOff() {
        if (!this.__isOn) {
            this.__isOn = true;
        } else {
            this.__isOn = false;
        }

        return this.__isOn;
    }

    printSwitchOnOrOff() {
        console.log('Computer is ', this.__isOn);
    }
}

class Laptop extends Computer {
    constructor(name, ram, power_cpu, inch) {
        super(name, ram, power_cpu);

        this.inch = inch;
    }

    powerBattery() {
        return this.power_cpu / (this.inch * this.ram);
    }

    printPowerBattery() {
        console.log('Battery is ', this.powerBattery());
    }
}

class UltraLaptop extends Laptop {
    constructor(name, ram, power_cpu, inch, weight) {
        super(name, ram, power_cpu, inch);

        this.weight = weight;
    }
    switchOnOrOff() {
        if (this.weight >= 2 && this.powerBattery() < 4) {
            this.__isOn = false;
            console.log('Error, This laptop is dead');
        } else {
            this.__isOn = true;
            console.log('laptop is life (', this.__isOn, ')');
        }
    }
}

// let test = new UltraLaptop('Lenovo', 12, 1000, 15, 2);
// test.printPowerBattery();
// test.switchOnOrOff();

// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class BasePC extends Computer {
    constructor(name, ram, power_cpu) {
        super(name, ram, power_cpu);
    }

    upgradePowerCpu() {
        this.power_cpu += this.power_cpu * 0.1;
    }

    upgradeRam() {
        this.ram *= 2;
    }

    countFps() {
        return this.power_cpu / this.ram;
    }

    StartGaming(nameGame) {
        console.log(`You are playing ${nameGame} with ${this.countFps()} FPS`);
    }
}

class GamingPC extends BasePC {
    // Easy
}

// let test = new BasePC('Lenovo', 12, 1000);
// test.StartGaming('Teraria');
// test.upgradePowerCpu();
// test.StartGaming('Teraria');

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// -- Додати принцу функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

