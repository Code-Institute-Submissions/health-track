$(document).ready(function () {

  //Start test
  console.log("hello");
  var letters = /[^a-zA-Z ]/g;
  var numbers = /[^0-9 ]/g;

  //Calculator Group JS
  $("#calculatorResultGroup").hide();

  $("#btnCalculate").click(function (e) {
    e.preventDefault();

    userHeight = $("#inputHeight").val();
    userWeight = $("#inputWeight").val();
    userAge = $("#inputAge").val();
    userGender = $(".inputGender:checked").val();
    userLifestyle = $("#inputLifestyle option:selected").val();
    bmi = userWeight / (userHeight / 100) ** 2;

    if (userHeight<1 || userWeight<1 || userAge<1 || userLifestyle.length<1) {
        alert("One or more of the input fields are empty or undefined. Please ensure all fields are filled.");
    }

    function bmiRange() {
      if (bmi >= 0 && bmi < 18.5) {
        cat = "Underweight";
      } else if (bmi >= 18.5 && bmi < 25.0) {
        cat = "Normal Weight";
      } else if (bmi >= 25.0 && bmi < 30.0) {
        cat = "Overweight";
      } else if (bmi > 30.0) {
        cat = "Obese";
      } 
      return cat;
    }

    function bmrCalculator() {
      if (userGender == "male") {
        bmr = 66.47 + 13.75 * userWeight + 5.003 * userHeight - 6.755 * userAge;
      } else if (userGender == "female") {
        bmr = 655.1 + 9.563 * userWeight + 1.85 * userHeight - 4.676 * userAge;
      }
      return bmr;
    }

    function calorieCalculator() {
      bmr = bmrCalculator();
      if (userLifestyle == "sedentary") {
        calorie = bmr * 1.2;
      } else if (userLifestyle == "moderately-active") {
        calorie = bmr * 1.55;
      } else if (userLifestyle == "active") {
        calorie = bmr * 1.9;
      }
      return calorie;
    }

    $("#bmiResult").html(bmi.toFixed(1));
    $("#bmiCat").html(bmiRange());
    $("#calRec").html(calorieCalculator().toFixed(1));
    $("#calculatorResultGroup").show();
  });

  //Counter Group JS
  $("#counterTable").hide();

  totalCal = 0;
  var calList = [];
  count = 0;
  sumCal = 0;
  
  $("#btnAdd").click(function (e) {
    e.preventDefault();

    $("#counterTable").show();

    inputFood = $("#inputFood").val();
    inputServing = $("#inputServing").val();
    inputMeal = $(".mealInput:checked").val();
   

    if (inputFood == "" || inputFood.match(letters)) {
      alert("One or more of the input fields are empty or undefined. Please ensure all fields are filled.");
    }

    urlCounter =
      "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + inputFood;

    fetch(urlCounter, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6803216c5dmsh0c91485a08c444ap1b9884jsn19a6a7c34928",
        "x-rapidapi-host": "calorieninjas.p.rapidapi.com",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        inputCal = data.items[0].calories;
        cal = (inputCal / 100) * inputServing;
        totalCal = totalCal + cal;
        calList.push(cal);

        console.log("Base calories: " + inputCal);
        console.log("Calculated calories: " + cal);
        console.log("Accumulated calories: " + totalCal);

        if (inputServing == "" || inputServing.match(numbers)) {
          alert("One or more of the input fields are empty or undefined. Please ensure all fields are filled.");
        } else {
          $("#tableBody").append(
            `<tr>
              <th>${inputMeal}</th>
              <td>${inputFood}</td>
              <td>${inputServing}</td>
              <td>${cal}</td>
              <td class="removeRow" id="${count}"><button type="button" class="btn btn-outline-primary">Remove</button></td>
             </tr>`
          );
        }
        console.log(count);
        count += 1;
        console.log(calList);
        console.log(count);
        $("#sumCal").html(totalCal);

        $(".removeRow").click(function() {
            $(this).parent().remove();
            $("#totalCalories").hide();
        });

        
        
        })
      .catch(function (error) {
        console.error(error);
        alert("Unable to find item in directory");
      });

    
    
  });

  //Generator Group JS

  $("#generatorTable").hide();

  $("#btnGenerate").click(function(e) {
    e.preventDefault();

    inputTarget = $("#inputTarget").val();

    if (inputTarget == "" || inputTarget.match(numbers)) {
      alert("One or more of the input fields are empty or undefined. Please ensure all fields are filled.");
    }

    urlGenerator = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=" + inputTarget + "&timeFrame=day";

    fetch(urlGenerator, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "6803216c5dmsh0c91485a08c444ap1b9884jsn19a6a7c34928",
		    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	    }
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data){
            breakfast = data.meals[0].title;
            breakfastURL = data.meals[0].sourceUrl;
            breakfastID = data.meals[0].id;
            breakfastImg = data.meals[0].imageType;
            lunch = data.meals[1].title;
            lunchURL = data.meals[1].sourceUrl;
            lunchID = data.meals[1].id;
            lunchImg = data.meals[1].imageType;
            dinner = data.meals[2].title;
            dinnerURL = data.meals[2].sourceUrl;
            dinnerID = data.meals[2].id;
            dinnerImg = data.meals[2].imageType;

            $("#myMeals").html(
                `<tr>
                    <th scope="row">Breakfast</th>
                    <td><img src="https://spoonacular.com/recipeImages/${breakfastID}-240x150.${breakfastImg}"></td>
                    <td>${breakfast}</td>
                    <td><a href="${breakfastURL}" target="_blank">${breakfastURL}</a></td>
                </tr>
                <tr>
                    <th scope="row">Lunch</th>
                    <td><img src="https://spoonacular.com/recipeImages/${lunchID}-240x150.${lunchImg}"></td>
                    <td>${lunch}</td>
                    <td><a href="${lunchURL}" target="_blank">${lunchURL}</a></td>
                </tr>
                <tr>
                    <th scope="row">Dinner</th>
                    <td><img src="https://spoonacular.com/recipeImages/${dinnerID}-240x150.${dinnerImg}"></td>
                    <td>${dinner}</td>
                    <td><a href="${dinnerURL}" target="_blank">${dinnerURL}</a></td>
                </tr>`
            );

        })
        .catch(err => {
	        console.error(err);
        });

        $("#generatorTable").show();

    });

  

  //End test
  console.log("All OK");
});
