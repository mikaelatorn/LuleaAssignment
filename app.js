//smooth scrolling for links in navbar

$(document).ready(function(){ //function for when the html doc is ready
  $("a").on('click', function(event) { // event on click ( a (link) tag )
    if (this.hash !== "") {
      event.preventDefault(); // Prevent default anchor click behavior (home)
      var hash = this.hash;      // Store hash code
     
      $('html, body').animate({ // Using animate() to add animated page scroll
        scrollTop: $(hash).offset().top
      }, 800, function(){  // 800 millisec to scroll down
   
        window.location.hash = hash;  // Add hash (#) to URL when done scrolling 
      });
    } 
  });
});