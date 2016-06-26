
(function () {

    "use strict";

    var ME = "menu";

    var extend = angular.extend,
        forEach = angular.forEach;


    /////////////////////////////////////////////
    angular.module("app")
        .component(ME, {
            templateUrl: ["APP_CONST", function (APP_CONST) { return APP_CONST.filePath[ME]; }],
            bindings: {
                isOldVersion: '<',
                folders: '<'
            },
            controller: fn
        });


    //***************************************************
    fn.$inject = ["$log"];
    function fn($log) {

        var ctrl = this;

        extend(ctrl, {

            $onInit: onInit,
            $onChanges: onChanges,

            test:false,
        });

        return;
        /////////////////

        /////////////////
        function onInit(){
            $log.log (ME, 'onInit')
        }

        /////////////////
        function onChanges(changes){
            $log.log (ME, 'onChanges', changes)
        }
    }

})();

