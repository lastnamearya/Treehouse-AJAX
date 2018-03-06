// Create a new XML Http Request (XHR) Object
var xhr = new XMLHttpRequest();

// Skelton of a callback function
xhr.onreadystatechange = function() {
  if(xhr.readyState ===4){
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
    var statusHTML = '<ul class="bulleted">';
    for(var i = 0; i < employees.length; i++){
      if(employees[i].inoffice === true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>'; 
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

// Opening the XHR Object, In a real world application we'll point to a server side script that would dynamically generate this JSON Data with the most current information on our employees
xhr.open('GET', 'data/employees.json');

// Send the Request
xhr.send();

// ********************************************************* //

var xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function() {
  if(xhr2.readyState ===4){
    var rooms = JSON.parse(xhr2.responseText);
    console.log(rooms);
    var roomsHTML = '<ul class="rooms">';
    for(var i = 0; i < rooms.length; i++){
      if(!rooms[i].available){
        roomsHTML += '<li class="full">';
      } else {
        roomsHTML += '<li class="empty">';
      }
      roomsHTML += rooms[i].room;
      roomsHTML += '</li>';
    }
    roomsHTML += '</ul>'; 
    document.getElementById('roomList').innerHTML = roomsHTML;
  }
};

xhr2.open('GET', '../data/rooms.json');

xhr2.send();

