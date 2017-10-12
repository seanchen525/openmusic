import _ from "lodash";

export default function($scope, loginFactory){
    let params = {
        username: $scope.loginUsername,
        password: $scope.loginPassword
    };

    $scope.loginMethod = loginFactory.login.bind(this, $scope, params);
    // $scope.loginMethod = _.partial(loginFactory.login, $scope, params);

}