
(function () {

    "use strict";

    var ME = "content";

    var extend = angular.extend,
        forEach = angular.forEach;

    /////////////////////////////////////////////
    angular.module("app")
        .component(ME, {
            templateUrl: ["APP_CONST", function (APP_CONST) { return APP_CONST.filePath[ME]; }],
            bindings: {
                isOldVersion: '<',
                folders: '<',
                folderRows: '<',
            },
            controller: fn
        });


    /////////////////////////////////////////////
    fn.$inject = ["$log"];
    function fn($log) {
        var ctrl = this;

        extend(ctrl, {
        });

        return;
        /////////////////
    }

})();

