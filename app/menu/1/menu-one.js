
(function () {

    "use strict";

    var ME = "app-menu-one";
    var COMPONENT = 'appMenuOne';

    var extend = angular.extend,
        forEach = angular.forEach;


    /////////////////////////////////////////////
    angular.module("app")
        .component(COMPONENT, {
            templateUrl: ["appFilePathConst", function (appFilePathConst) { return appFilePathConst[ME]; }],
            bindings: {
                folders: '<'
            },
            controller: fn
        });


    //***************************************************
    fn.$inject = ["$log"];
    function fn($log) {

        var ctrl = this;

        extend(ctrl, {

            "$onInit": onInit,
            "$onChanges": onChanges
        });

        return;
        /////////////////


        /////////////////
        function onInit(){
            $log.log(ME, 'onInit');
        }

        /////////////////
        function onChanges(changes){
            $log.log(ME, 'onChanges', changes);
        }
    }

})();

