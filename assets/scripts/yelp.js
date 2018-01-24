$(function () {
     
         var city = $("#userInput").val();
         
         
// AJAX call ----

         var settings = {
             "async": true,
             "crossDomain": true,
             "url": "https://api.yelp.com/oauth2/token" ,
             "method": "POST",
             
         }
    $.ajax(settings).done(function (response) {
        console.log(response);
        })
    })

    
 /*   $.ajax({
        type: "GET",
        url: queryURL + city + "&apikey=RAJIFQErgEgMNdIAtVrRj7Z6bAWPY0cl",
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json); */
        
      //  var stringified = $("#well-section").text(JSON.stringify(json)); 
    
        // .data() = Store arbitrary data associated with the matched elements or return the value
        // at the named data store for the first element in the set of matched elements.


    
     //   $("#well-section").text(json);
            // for loop for json results
        //   for (var i=0; i < json.length; i++) {
               
        
        
   
    
     
  

         
        
