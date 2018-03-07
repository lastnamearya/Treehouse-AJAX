/* This jQuery function will wait for all the html file to load in the browser before running any JavaScript inside it. 

- This is required what you only adding Js in the head of your document before HTML.
- You often need js to manipulat or change already existing HTML in the page. You'll run into errors when you try to alter any html that hasn't already loaded. 

*/

$(document).ready(function () { 

  var url = "../data/employees.json";

  // This function only handles JSON Data, so before passing the response from the server to the callback, jQuery parses the response into a usuable JavaScript array or object. If the server responds with plain text, html or XML, the entire getJSON function fails. Even you don't get any error in the console. 
  $.getJSON(url, function(response){
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee){
      if(employee.inoffice === true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); // end getJSOn

  $.getJSON('../data/rooms.json', function(data){
    var statusHTML = '<ul class="rooms">';
    $.each(data, function(index, room){
      if(room.available === true){
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += room.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML);
  }); // end getJSOn

}); // end ready







// // Create a new XML Http Request (XHR) Object
// var xhr = new XMLHttpRequest();

// // Skelton of a callback function
// xhr.onreadystatechange = function() {
//   if(xhr.readyState ===4){
//     var employees = JSON.parse(xhr.responseText);
//     console.log(employees);
//     var statusHTML = '<ul class="bulleted">';
//     for(var i = 0; i < employees.length; i++){
//       if(employees[i].inoffice === true){
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>'; 
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };

// // Opening the XHR Object, In a real world application we'll point to a server side script that would dynamically generate this JSON Data with the most current information on our employees
// xhr.open('GET', 'data/employees.json');

// // Send the Request
// xhr.send();

// // ********************************************************* //

// var xhr2 = new XMLHttpRequest();

// xhr2.onreadystatechange = function() {
//   if(xhr2.readyState === 4){
//     var rooms = JSON.parse(xhr2.responseText);
//     console.log(rooms);
//     var roomsHTML = '<ul class="rooms">';
//     for(var i = 0; i < rooms.length; i++){
//       if(!rooms[i].available){
//         roomsHTML += '<li class="full">';
//       } else {
//         roomsHTML += '<li class="empty">';
//       }
//       roomsHTML += rooms[i].room;
//       roomsHTML += '</li>';
//     }
//     roomsHTML += '</ul>'; 
//     document.getElementById('roomList').innerHTML = roomsHTML;
//   }
// };

// xhr2.open('GET', '../data/rooms.json');

// xhr2.send();

