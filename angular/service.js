(function () {
    'use strict'
    angular
        .module("homeproject")
        .service("TODOService", TODOService);

    function TODOService($http) {
        return {
            getTODOs: function () {
                return $http.get("mock.json");
            }
        }
    }
})();
