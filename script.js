/**
 * Created by pragyagoel on 10/21/16.
 */
angular.module('toDoList',[])
    .controller('toDoController',['$scope',function ($scope) {
    $scope.todos = [
        {
            'list': 'Do not forget things anymore',
            'done': false
        }
    ];

    $scope.addToDo = function (keyEvent) {
        if(keyEvent.which === 13 && $scope.newToDo.length != 0){
            $scope.todos.push({'list':$scope.newToDo,'done':false});
            $scope.newToDo = '';
        }
    };

    function checkIfDone(item){
        return !item.done;
    }

    $scope.clearCompleted = function () {
        $scope.todos=$scope.todos.filter(checkIfDone);
    };

    //make editable
    $scope.editItem = function(todo){
        todo.inlineEdit = true;
    };
    //after editing done
    $scope.myFunc = function(keyEvent, i, todo){
        if(keyEvent.which === 13 ){
            $scope.todos[i] = todo;
            todo.inlineEdit = false;
        };
    };

}])