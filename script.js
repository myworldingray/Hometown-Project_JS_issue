let element_gurkhas = document.getElementById('gurkhas');
element_gurkhas.style.color = '#DE8663';
var images;


images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsOXmiFq6BTAqYazxnX359s_cmZD_gYRpsg&s', 'https://lp-cms-production.imgix.net/2022-02/Nepal%20Kathmandu%20The-Walker%20shutterstock_1147311047%20RFE.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75', 'https://nepaltraveller.com/images/main/1712812178.jpg'];
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel');
  images.push(images[0]);
  element_carousel2.setAttribute("src", images[0]);
  images.shift();

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_carousel3 = document.getElementById('carousel');
  images.unshift(images.slice(-1)[0]);
  element_carousel3.setAttribute("src", images.slice(-1)[0]);
  images.pop();

});