import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginController from 'login/loginController';
import loginFactory from 'factories/loginFactory';

const app = angular.module('app', [uiRouter, loginFactory.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('home/home.html')
        })
        .state('login', {
            url: '/login',
            template: require('login/login.html'),
            controller: loginController
        })
        .state('signup', {
            url: '/signup',
            template: require('signup/signup.html')
        });
    
    $locationProvider.html5Mode(true);    
});

export default app;