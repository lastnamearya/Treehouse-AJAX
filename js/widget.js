// Create a new XML Http Request (XHR) Object
var xhr = new XMLHttpRequest();

// Skelton of a callback function
xhr.onreadystatechange = function() {
  if(xhr.readyState ===4){

  }
};

// Opening the XHR Object, In a real world application we'll point to a server side script that would dynamically generate this JSON Data with the most current information on our employees
xhr.open('GET', 'data/employees.json');

// Send the Request
xhr.send();