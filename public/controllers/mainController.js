myapp.controller('mainController', function($scope, $http) {

    $scope.blogs = {};

    $http.get('http://localhost:8000/blogtext').
    success(function(data, status, headers, config) {
        console.log(data)

        $scope.blogs = data;

    }).
    error(function(data, status, headers, config) {

    });


    $scope.image = {
        uri: ''
    };

    $http.get('http://localhost:8000/blogimg').
    success(function(data, status, headers, config) {

        //console.log(data); //weird freakish satan symbols
        // $scope.image = data;
        $scope.image.uri = 'data:image/jpg;base64,' + data;




    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

});