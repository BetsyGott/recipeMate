var app = angular.module('recipeMate', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'nutrition.html',
            controller: "mainController",
            controllerAs: "mc"
        })
        .when('/database', {
            templateUrl: 'database.html'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});

app.controller('mainController', function(){
    this.foodList = [
        {
            name: 'Hamburger',
            category: 'Sandwiches',
            servingSize: '100g',
            calories: 270,
            carbs: 80,
            fat: 20,
            protein: 25,
            sodium: 2300,
            fiber: 6
        },
        {
            name: 'Avocado Salad',
            category: 'Salads',
            servingSize: '1 cup',
            calories: 80,
            carbs: 0,
            fat: 0,
            protein: 0,
            sodium: 0,
            fiber: 1
        },
        {
            name: 'Penne Puttanesca',
            category: 'Pasta',
            servingSize: '1 cup',
            calories: 350,
            carbs: 95,
            fat: 8,
            protein: 15,
            sodium: 2500,
            fiber: 3
        },
        {
            name: 'Tuna Sushi',
            category: 'Fish',
            servingSize: '1 piece',
            calories: 50,
            carbs: 10,
            fat: 2,
            protein: 2,
            sodium: 200,
            fiber: 0
        }
    ];

    this.addData = function(object){
        this.foodList.push(object);
    };
});