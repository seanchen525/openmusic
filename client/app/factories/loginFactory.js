import angular from 'angular';

const loginFactory = angular.module('app.loginFactory',[])

.factory('loginFactory', () => {
    function login($scope, params) {
        console.log(params.username);
        console.log(params.password);
    };

    return {
        login
    }
});

export default loginFactory;