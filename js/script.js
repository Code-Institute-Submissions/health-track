$(document).ready(function () {
    
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6803216c5dmsh0c91485a08c444ap1b9884jsn19a6a7c34928",
            "x-rapidapi-host": "calorieninjas.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        

    });


  });