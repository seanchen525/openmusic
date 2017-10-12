import angular from 'angular';

const loginFactory = angular.module('app.loginFactory',[])

.factory('loginFactory', () => {
    function login($scope, params) {
        console.log(params.loginUsername);
        console.log(params.loginPassword);
    };

    return {
        login
    }
});

export default loginFactory;