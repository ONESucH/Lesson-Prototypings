'use strict';
//var obj = {
//    name: [
//        'текст 1', 'текст 2', 'текст 3', 'текст 4', 'текст 5'
//    ],
//    speed: [
//        'скорость: ', 'скорость: ', 'скорость: ', 'скорость: ', 'скорость: '
//    ]
//};
//
//function Rabbit(name, speed) {
//    this.name = name;
//    this.speed = speed;
//}
//
//// задаём наследование
//Rabbit.prtotype = Object.create(obj.prototype);
//
//// и добавим свой метод (или методы...)
//Rabbit.prototype.jump = function(result) {
//    console.log('result', result);
//};

// Прототипирование
// var UserData = {
//     constructor: function (name, age, gender) { // Создаём объект конструктор
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         return this;
//     },
//     greet: function () {
//         console.log('Сообщение для ', this.name);
//     }
// };
//
// var userOne, userTwo, userThree;
//
// userOne = Object.create(UserData).constructor('Вова', 30, 'male');
// userTwo = Object.create(UserData).constructor('Ваня', 45, 'male');
// userThree = Object.create(UserData).constructor('Вера', 25, 'female');
//
// console.log(userOne.name);
// console.log(userTwo.age);
// console.log(userThree.gender);
//
// userOne.greet();
// userTwo.greet();
// userThree.greet();














































var dataUser = {
    constructor: function (name, age, description) {
        this.name = name;
        this.age = age;
        this.description = description;
        return this;
    },
    render: function () {
        console.log('Ваше имя ', this.name);
        console.log('Ваш возрост ', this.age);
        console.log('Ваше описание ', this.description);
    }
};

var vova, valya, dima;

vova = Object.create(dataUser).constructor('vova', 50, 'Описание vova');
valya = Object.create(dataUser).constructor('valya', 20, 'Описание valya');
dima = Object.create(dataUser).constructor('dima', 27, 'Описание dima');


console.log(vova);
console.log(valya);
console.log(dima);



vova.render();
valya.render();
dima.render();

