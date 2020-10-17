'use strict';

// ------------------ Pagination/Ajax ------------------ //

$.ajax('../data/page-1.json').then(data => {
  console.log(data);
  data.forEach(imgObject => {
    new HornedAnimal(imgObject.image_url, imgObject.title, imgObject.description, imgObject.keyword, imgObject.horns, 1).render();
  });
  newArray(data, keywordArray);
  console.log(keywordArray);
  populateDropDown(keywordArray);
  userInput();
});

$.ajax('../data/page-2.json').then(data => {
  // console.log(data);
  data.forEach(imgObject => {
    new HornedAnimal(imgObject.image_url, imgObject.title, imgObject.description, imgObject.keyword, imgObject.horns, 2);
  });
  newArray(data, keywordArray2);
  console.log(keywordArray);
  // populateDropDown(keywordArray2);
  // userInput();
});

let page = 1;

$('#page-1').on('click', () => {
  console.log('hello world');
});

$('#page-2').on('click', () => {
  // console.log('this is number 2');
  $('#photo-container').empty();
  console.log(hornsArray2);
  hornsArray2.forEach(value => {
    value.render();
  });
});

// ------------------ Generating HTML Elements ------------------ //

// let $template = $('#photo-template');
// let $container = $('#photo-container');
// let $dropdown = $('#dropdown');

// ------------------ Global Variables ------------------ //
let hornsArray = [];
let hornsArray2 = [];
let keywordArray = [];
let keywordArray2 = [];

// ------------------ Constructor Function ------------------ //
function HornedAnimal(image_url, title, description, keyword, horns, page) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  if (page === 1) {
    hornsArray.push(this);
  } else {
    hornsArray2.push(this);
  }
}

HornedAnimal.prototype.render = function () {
  let section = $('#photo-template').clone();
  console.log('hello');
  $('#photo-container').append(section);
  section.find('h2').text(this.title);
  section.find('img').attr('src', this.image_url);
  section.find('p').text(this.description);
  section.addClass(this.keyword);

  return section;
};

const newArray = (data, targetArray) => {
  data.forEach(imgObject => {
    if (!targetArray.includes(imgObject.keyword)) {
      targetArray.push(imgObject.keyword);
    }
  });
};

function populateDropDown(pageKeywordArray) {
  const $dropdown = $('select');
  pageKeywordArray.forEach(keywords => {
    console.log(keywords);
    const $newOption = $(`<option value = '${keywords}'>${keywords}</option>`);
    $dropdown.append($newOption);
  });
}


let userInput = () => {
  $('select').on('change', function () {
    let selected = this.value;
    console.log('value', selected);
    $('section').hide();
    hornsArray.forEach(image => {
      if (selected === image.keyword) {
        let keyword = selected;
        console.log(keyword);
        $('.' + keyword).show();
      }
    });
  });
};


// ---------------- class demo -----------------

// <script src="https://unpkg.com/mustache@latest"></script>

// --------------- Feature 1: Pagination ---------------

// Why are we implementing this feature?

// As a user, I want to have the ability to view additional images so that my view does not become cluttered.

// What are we going to implement?

// Given that a user opens the application in the browser When the user clicks on a button or link to another page Then the other set of images should be dynamically displayed

// How are we implementing it?

// Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.

// Reset the filters, then repopulate them using only keywords from the images currently being displayed.


// --------------- Feature 2: Templating -------------------

// Why are we implementing this feature?

// As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.

// What are we going to implement?

// Given that a user opens the application in the browser When the images are displayed on the screen Then each image should be rendered according to a template

// How are we implementing it?

// Create the appropriate Mustache template in your HTML with the same <h2>, <imgObject>, and <p> elements as the jQuery template from the prior lab.

// Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.

// --------------- Feature 3: Styling with Flexbox ---------------

// Why are we implementing this feature?

// As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.

// What are we going to implement?

// Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in columns, as screen width allows

// How are we implementing it?

// Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.

// --------------- Feature 4: Sort the images ---------------

// Why are we implementing this feature?

// As a user, I want to be able to sort the images so that there is an order to their rendering.

// What are we going to implement?

// Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

// How are we implementing it?

// Add the ability for the user to sort the images by either title or by number of horns.

// Sort the images by one of the properties on page load. This should also apply to the second page of images.
