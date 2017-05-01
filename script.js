var app = angular.module('ourModule', []);

app.controller('ourController', function($scope) {

  $scope.toDoList = [];

$scope.addItem = function(newItem){

  console.log(newItem);

  $scope.toDoList.push({ name: newItem });
  $scope.item.name="";

  console.log($scope.toDoList);
}
$scope.removeItem = function(newItem){
  var index = $scope.toDoList.indexOf(newItem);
  $scope.toDoList.splice(index,1);
}

});
