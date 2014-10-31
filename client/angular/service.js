(function () {
    'use strict'
    angular
        .module("homeproject")
        .service("TODOService", TODOService);

    function TODOService($http) {
        return {
            getTODOs: function () {
                return $http.get("http://localhost:3000/api/todos");
            }
        }
    }
})();
