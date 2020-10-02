'use strict';



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

