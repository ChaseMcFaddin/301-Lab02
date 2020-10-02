'use strict';

//Received help from Brandon Gonzales

let $hornedAnimalsTemplate = $('.hornedAnimalsTemplate');
let $hornedAnimals = $('.all-images');

$.ajax('../data/page-1.json').then(data => {
  data.forEach(function(img) {
    let $newAnimal = $hornedAnimals.clone();
    // $newAnimal.text(animal.title);
    $hornedAnimalsTemplate.append($newAnimal);
    $newAnimal.find('h2').text(img.title);
    $newAnimal.find('img').attr('src', img.image_url);
    $newAnimal.find('p').text(img.description);
    $newAnimal.attr('class', img.keyword);
  });
});
