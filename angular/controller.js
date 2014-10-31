angular
    .module("homeproject")
    .controller("MainCtrl", MainCtrl);

function MainCtrl(TODOService){
    var vm = this;
    TODOService.getTODOs().success(function(data){
        vm.todoList = data;
    });

    this.submitTODO = submitTODO;

    function submitTODO(){
        var todo = {
            "author": vm.newAuthor,
            "message": vm.newMessage
        };

        vm.todoList.push(todo);
        vm.newAuthor = "";
        vm.newMessage = "";
    }
}
