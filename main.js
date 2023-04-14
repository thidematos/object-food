'use strict';

const body = document.querySelector(`body`);

const createHeader = document.createElement('h1');

const btn = document.querySelector(`.orderBtn`);

const inputStarters = document.querySelectorAll('.starters');

const inputMains = document.querySelectorAll('.inputMain');

const inputText = document.querySelector('#inputText');

const inputName = document.querySelector('#inputName');

const modal = document.querySelector('.modal');

const focal = document.querySelector('.focal');

const modalParagrafo = document.querySelector('.paragrafoModal');

const orders = [];

let newOrder;

let mainOrder;

let starterOrder;

const restaurant = {
  name: 'Doce Mar',
  location: 'Vila, Ilha Bela',
  categories: ['italian', 'pizzaria'],
  starterMenu: ['Bread', 'More Bread', 'Another kind of Bread'],
  mainMenu: ['Cheese', 'Veggie', 'Pepperoni', 'Meat'],

  orderDelevery: function ({
    time = '00:00',
    adress,
    starterIndex,
    mainIndex,
    name,
  }) {
    newOrder = `Order received, ${name}! Time: ${time}. Adress: ${adress}. Courses --> Starter: ${this.starterMenu[starterIndex]}. Main: ${this.mainMenu[mainIndex]}`;
    orders.push(newOrder);
    console.log(orders[orders.length - 1]);
  },
};

for (let i = 0; i < inputStarters.length; i++) {
  inputStarters[i].addEventListener('click', function (e) {
    starterOrder = restaurant.starterMenu.indexOf(e.target.id);
    console.log(starterOrder);
  });
}

for (let i = 0; i < inputMains.length; i++) {
  inputMains[i].addEventListener('click', function (e) {
    mainOrder = restaurant.mainMenu.indexOf(e.target.id);
    console.log(mainOrder);
  });
}

btn.addEventListener('click', function () {
  if (inputText.value || inputName.value) {
    let adress = inputText.value;
    let time = new Date();
    let currentTime = `${time.getHours()}:${time.getMinutes()}hrs`;
    let name = inputName.value;
    console.log(time);
    console.log(name);
    console.log(adress);
    restaurant.orderDelevery({
      name: name,
      time: currentTime,
      adress: adress,
      starterIndex: starterOrder,
      mainIndex: mainOrder,
    });
    modal.classList.remove('hidden');
    focal.classList.remove('hidden');
    inputText.classList.remove('error');
    inputName.classList.remove('error');
  } else if (!inputName || !inputText) {
    inputText.classList.add('error');
    inputName.classList.add('error');
  }
});

focal.addEventListener('click', function () {
  focal.classList.add('hidden');
  modal.classList.add('hidden');
  modalParagrafo.textContent = orders[orders.length - 1];
});
