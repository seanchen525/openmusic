import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginController from './components/login/loginController';
import loginFactory from './factories/loginFactory';
import signupController from './components/signup/signupController';
import signupFactory from './factories/signupFactory';

const app = angular.module('app', [uiRouter, loginFactory.name, signupFactory.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./components/home/home.html')
        })
        .state('login', {
            url: '/login',
            template: require('./components/login/login.html'),
            controller: loginController
        })
        .state('signup', {
            url: '/signup',
            template: require('./components/signup/signup.html'),
            controller: signupController
        });
    
    $locationProvider.html5Mode(true);    
});

export default app;