import _ from "lodash";

export default function($scope, signupFactory){
    let params = {
        username: $scope.signupUsername,
        password: $scope.signupPassword,
        email: $scope.signupEmail,
        status: "enroll"
    }

    $scope.$watch('signupUsername', val => { params.username = $scope.signupUsername;});
    $scope.$watch('signupPassword', val => { params.password = $scope.signupPassword;});
    $scope.$watch('signupEmail', val => { params.email = $scope.signupEmail;});

    $scope.signupMethod = _.partial(signupFactory.signup, $scope, params);
}