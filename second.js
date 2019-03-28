let app = angular.module("Quote",[])
app.controller("mycontroller",function($scope, $http,$window){
     $scope.start=function(){
         $http.get('https://favqs.com/api/qotd').then(function successCallback(response) {
        console.log(response.data.quote);
        $scope.quotename=response.data.quote.body
        $scope.author=response.data.quote.author
    })
}
    $scope.start()
    $scope.change=function(){
        $scope.start()
    }

$scope.twitter=function(){
    console.log("nipun")
    $window.open('https://twitter.com/intent/tweet?hashtags=quote&text='+encodeURI($scope.quotename), '_blank')
}
})