'use strict';

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


