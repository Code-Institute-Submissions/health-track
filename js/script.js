$(document).ready(function () {

    $('#calculatorGroup').hide();
    $('#calculatorResultGroup').hide();
    $('#counterGroup').hide();
    
    //Main Display JS
    $('#cardCalculator').click(function(){
        $('#mainDisplay').hide();
        $('#calculatorGroup').show();
    })

    $('#cardCounter').click(function(){
        $('#mainDisplay').hide();
        $('#counterGroup').show();
    })

    //Calculator Group JS
    $('#btnCalculate').click(function(e){
        e.preventDefault();

        userHeight = $('#inputHeight').val();
        userWeight = $('#inputWeight').val();
        userAge = $('#inputAge').val();
        userGender = $('.inputGender:checked').val();
        userLifestyle = $('#inputLifestyle option:selected').val();
        bmi = userWeight / (userHeight/100)**2;

        function bmiCalculator() {
            return bmi;
        }

        function bmiRange() {
            if (bmi < 18.5) {
                cat = "Underweight";
            }
            else if (bmi >= 18.5 && bmi < 25.0) {
                cat = "Normal Weight";
            }
            else if (bmi >= 25.0 && bmi < 30.0) {
                cat = "Overweight";
            }
            else if (bmi > 30.0) {
                cat = "Obese";
            }
            else {
                cat = "Error";
            }
            return cat;
        }

        $('#bmiResult').append(bmiCalculator());
        $('#bmiCat').append(bmiRange());
        $('#calculatorGroup').hide();
        $('#calculatorResultGroup').show();
    
    });

    //Calculator Result Group





    //Counter Group JS
    /*const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6803216c5dmsh0c91485a08c444ap1b9884jsn19a6a7c34928",
            "x-rapidapi-host": "calorieninjas.p.rapidapi.com"
        }
    };*/



    $('#btnAdd').click(function(e){
        e.preventDefault();

        inputFood = $('#inputFood').val();
        inputServing = $('#inputServing').val();
        inputMeal = $('.mealInput:checked').val();

        $('#test2').append(inputFood);

        

        //obj = JSON.parse(settings);

        //$('#test').append(obj);



        //obj.url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + inputFood;

        //$('#test').append(obj.url);

        //myJSON = JSON.stringify(obj);
        
        /*$.ajax(settings).done(function (response) {
            console.log(response);
        });*/



        $('#tableRow').after(`<tr><th>${inputMeal}</th><td>${inputFood}</td><td>${inputServing}</td><td>(cal)</td></tr>`);

    })

    

    


  });