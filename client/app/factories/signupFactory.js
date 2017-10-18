import angular from 'angular';

const signupFactory = angular.module('app.signupFactory',[])

.factory('signupFactory', ($http) => {
    function signup($scope, params) {
        $http.post('/user/signup', params)
            .then(response => {
                console.log(response);
            });
    };

    return {
        signup
    }
});

export default signupFactory;