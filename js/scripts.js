'use strict';

let category = 'dev';

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');

function getQuote(category) {
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
  
  //jquery API call that replaced the JavaScript approach we previously implemented
  $.ajax({
    type: 'GET',
    url: apiUrl,
    success: function(response){
      //jQuery approach to updating DOM
      $('#chuckSays').text(response.value)
    },
    error: function(error){
      console.error('error:',error)
    }
  })
}




//appending categories to a dropdown menu
const getCategories = () => {
  const url = `https://api.chucknorris.io/jokes/categories`;
  const dropdownMenu = document.getElementById('categoryInput')
  $.ajax({
    type: 'GET',
    url: url,
    success: function(response){
      //jQuery approach to updating DOM
      response.map(function (category) {
        if (category != "explicit") {
            const categoryOption = document.createElement('option')
            categoryOption.value = category;
            categoryOption.text = category.charAt(0).toUpperCase() + category.slice(1);
            dropdownMenu.appendChild(categoryOption);
        }
    })
    },
    error: function(error){
      console.error('error:',error)
    }
  })
}




refreshQuoteButton.addEventListener('click', function(e) {
  e.preventDefault();
  getQuote(category);
});

submitFormButton.addEventListener('click', function(e) {
  e.preventDefault();
  const categoryInput = document.querySelector('#categoryInput');

  category = categoryInput.value;
  getQuote(category);
});


$(document).ready(()=>{
  getCategories();
  getQuote(category);
});
  


