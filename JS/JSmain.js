
(function(){
  var $imgs = $('#gallery img'); //get the image
  var $search = $('#filter_search'); //get the input element
  var cache = []; //creat an array called cache
  
  
  $imgs.each(function(){ //For each image, loop
    cache.push({ //add an object to the cache array
      element: this, //this image
      text: this.alt.trim().toLowerCase()//its alt text (lowercase trimmed)
      });
    });
  function filter(){  //declare filter()function
    var query = this.value.trim().toLowerCase(); //get the query
    
    cache.forEach(function(img){ //For each entry in cache pass image
      var index = 0; //set index to 0
      if(query){ //of there is some query text
        index = img.text.indexOf(query); //Find if query text is in there
      }
      
      img.element.style.display = index === -1 ? 'none': ''; //show / hide
                
    });
        
  };
  
  if ('oninput'in $search[0] ){ //if browser supports input event
    $search.on('input', filter); //use input event to call filter()
    }else {
      $search.on('keyup', filter); //Use keyup event to call filter ()
    }
  
 
}());