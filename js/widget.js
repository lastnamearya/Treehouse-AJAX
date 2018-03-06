// Create a new XML Http Request (XHR) Object
var xhr = new XMLHttpRequest();

// Skelton of a callback function
xhr.onreadystatechange = function() {
  if(xhr.readyState ===4){

  }
};

// Opening the XHR Object
xhr.open('GET', 'data/employees.json');