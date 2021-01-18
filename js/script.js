$(document).ready(function () {

    //$('.calculator').hide();
    //$('.counter').hide();
    
    $('.cardCalculator').click(function(){
        $('.mainDisplay').hide();
        $('.calculator').show();
    })

    $('.cardCounter').click(function(){
        $('.mainDisplay').hide();
        $('.counter').show();
    })



    $('#btnAdd').click(function(e){
        e.preventDefault();

        inputFood = $('#inputFood').val();
        inputServing = $('#inputServing').val();
        inputMeal = $('.form-check-input:checked').val();

        //$('#test').append();

        param = $('#inputFood').val();

        
        

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6803216c5dmsh0c91485a08c444ap1b9884jsn19a6a7c34928",
                "x-rapidapi-host": "calorieninjas.p.rapidapi.com"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });



        $('#tableRow').after(`<tr><th>${inputMeal}</th><td>${inputFood}</td><td>${inputServing}</td><td>(cal)</td></tr>`);

    })

    

    


  });