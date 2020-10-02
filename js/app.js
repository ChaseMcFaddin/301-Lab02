'use strict';

<<<<<<< HEAD


let image_url = [];

function renderImages(json) {
  let srcItems = [];
  srcItems = JSON.parse(json);
}

const div = document.getElementById('animals');
div.innerHTML = '';
for (let i = 0; i < srcItems.length; i++) {
  const nameDiv = document.createElement('div');
  nameDiv.innerHTML = srcItems[i].title;
  const img = document.createElement('img');
  img.src = srcItems[i].image_url;
}

new hornAnimal("http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg", 'Uniwhal', 'narwhal', 1);
=======
//Received help from Brandon Gonzales

let $hornedAnimalsTemplate = $('.hornedAnimalsTemplate');
let $hornedAnimals = $('.all-images');

$.ajax('../data/page-1.json').then(data => {
  data.forEach(function (img){
    // new img STOPPED HERE ---------------------------------------------
  })
  data.forEach(function (img) {
    let $newAnimal = $hornedAnimals.clone();
    // $newAnimal.text(animal.title);
    $hornedAnimalsTemplate.append($newAnimal);
    $newAnimal.find('h2').text(img.title);
    $newAnimal.find('img').attr('src', img.image_url);
    $newAnimal.find('p').text(img.description);
    $newAnimal.attr('class', img.keyword);
  });
});

let keywordArray = [];

const newArray = () => {
  data.forEach($hornedAnimalsTemplate => {
    if (!keywordArray.includes($hornedAnimalsTemplate.keyword)) {
      keywordArray.push($hornedAnimalsTemplate.keyword);
    }
  });
};

const populateDropDown = () => {
  const $default = $('select');
  keywordArray.forEach(keywords => {
    console.log(keywords);
    const $newDefault = $(`<option value = '${keywords}'>${keywords}</option>`);
    $default.append($newDefault);
  });
};

newArray();
populateDropDown();

>>>>>>> 34c13f82fee4d74cd873222f411b3bffa8cedc16

