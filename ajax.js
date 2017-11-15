document.addEventListener("DOMContentLoaded", function() {
  /* Your code goes here */
  var step2Button = document.querySelector('#step12 > button');
  var step3456Button = document.querySelector('#step3456 > button');
  var section3456 = document.querySelector('#step3456');
  var step7Button = document.querySelector('#step7 > button');
  var section7 = document.querySelector('#step7');
  var step8Button = document.querySelector('#step8 > button');
  var section8 = document.querySelector('#step8');
  var step9Button = document.querySelector('#step9 > button');
  var section9 = document.querySelector('#step9');
  var list = document.querySelector('#step9-list');

  step2Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });

  step3456Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done( function(response) {
      console.log('The response was: ' + response);
      section3456.append(response);
    }).fail( function() {
      console.log("Request failed!");
      section3456.append("Sorry, your request failed!");
    }).always( function() {
      console.log("The request took place!");
      section3456.append("Hey the request finished!")
    });
  });

  step7Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done( function(response) {
      section7.append(response);
    })
  });

  step8Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {
        timezone: 'America/Mexico_City'
      },
      dataType: 'text'
    }).done( function(response) {
      section8.append(response);
    });
  });

  step9Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    }).done( function(response) {
      var newItem = document.createElement('li');
      newItem.innerHTML = response;
      list.append(newItem);
    });
  });

});
