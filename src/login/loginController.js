import _ from "lodash";

export default function($scope, loginFactory){
    let params = {
        username: $scope.loginUsername,
        password: $scope.loginPassword
    };
    
    $scope.$watch('loginUsername', val => { params.username = $scope.loginUsername;});
    $scope.$watch('loginPassword', val => { params.password = $scope.loginPassword;});

    $scope.loginMethod = _.partial(loginFactory.login, $scope, params);
}