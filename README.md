# Interactive Front-End Development - Milestone Project 2

![health-track logo](images/health_track_logo.png) 
### Website to monitor an individual's health and diet

# Table of Contents
1. Background
2. Objectives
3. Demo
4. Adopted Technology
5. Building Process
6. Testing
7. Deployment
8. Acknowledgement

# 1. Background
Health Track is an interactive website targeted towards users who are health-conscious. The website allows the users to find out their BMI based on their height and weight, their recommended daily calorie intake based on their age and level of activeness, monitor their calorie intake for the day, and also suggest to them some dishes that they can prepare themselves and consume based on their recommended daily calorie intake. The website will be able to assist the users in their journey to maintain a healthy lifestyle.

# 2. Objectives
* To complete Milestone Project 2 - Interactive Front-End Development.
* To build an interactive website that is able to receive user input and process the data to generate an output that is useful for the user.
* To assist health-conscious users who need to monitor their calorie intake.

# 3. Demo
View the end product: [Health Track](https://farhansam.github.io/health-track/)

# 4. Adopted Technology
* HTML/CSS
* Bootstrap v4.1.x
* Javascript/jquery
* Postman & RapidAPI (for APIs)
* Stackoverflow
* Canva
* Github

# 5. Building Process

## User Stories
The target audience for the website are health-conscious individuals who are interested to monitor their current state of general health and their calorie intake. Some of the questions that users might ask are:

1. What is my BMI?
2. What is my recommended daily calorie intake?
3. How many calories have I consumed today?
4. What are some of the dishes that I can eat based on my recommended calorie intake?
5. How do I prepare the dishes?

In this respect, the website was built in response to these questions. Hence, the following features were created:

1. Home page to provide options to the user to address one of the above possible questions.
2. The BMI & Calorie Calculator to inform the user of their current state of general health.
3. The Calorie Counter to take in user consumption input and return the amount of calories that they have consumed.
4. The Meal Generator to randomly generate 3 dishes whose total calories add up to the user's recommended calorie intake.
5. The dishes generated provide the user with links to an external website that contain the recipe for that particular dish and more information about that dish.

## Key Features and its Assimilation to User Stories
### 1. Navbar
* To allow users to navigate through different pages seamlessly and from within any page.
### 2. BMI & Calorie Calculator
* Before proceeding to monitor their calorie intake, the user needs to know their current state of general health. Hence the calculator will assist them to discover this.
### 3. Calorie Counter
* Some dishes that do not come in packaging do not have any calorie information, hence the user will not be able to know how many calories have they consumed for the day, much less monitor their calorie intake. So the purpose of the calorie counter is to enable them to have an estimate of whether they have exceeded their daily calorie intake.
### 4. Meal Generator
* Sometimes users may run out of ideas on what are some of the dishes that they can consume in order not to exceed their daily calorie intake. They may also have limited knowledge in preparing a wide variety of healthy dishes. The meal generator addresses this need and take the brainstorming burden out of the users' mind.
### 5. Usage of API
* Information are extracted from a database that returns an output upon an input request. This enhances the interactivity between the user and the website.
### 6. Mobile Responsiveness
* To accommodate to users of mobile phones who prefer to visit websites on-the-go.

# 6. Testing
All HTML and CSS files were passed through W3C Nu HTML and Jigsaw CSS validators respectively. Files were uploaded to the validators and all errors were fixed.

# 7. Deployment
The website was deployed through Github pages.
* Link to published website: (https://farhansam.github.io/health-track/)

# 8. Acknowledgement
* Trent Global College for providing the platform for learning.
* Code Institute for their TAs, namely:
  * Malcolm Yam
  * Shun
  * Paul Chor
  * Arif Rawi
* [Rapid API](https://rapidapi.com/)
  * Spoonacular (Meal & recipe generator)
  * Calorie Ninjas (Calorie information)
* [Stackoverflow](https://stackoverflow.com/) for coding tips
* [diabetes.co.uk] (https://www.diabetes.co.uk/bmr-calculator.html) for the recommended calorie intake formula
* [Canva](https://www.canva.com/) for images used in the website.
* [Bootstrap](https://getbootstrap.com/) for HTML and CSS templates.
* [w3schools][https://www.w3schools.com/] for basic HTML/CSS/Javascript/Jquery syntax references.
