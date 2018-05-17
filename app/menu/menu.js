
(function () {

    "use strict";

    var ME = "app-menu";
    var COMPONENT = 'appMenu';

    var extend = angular.extend,
        forEach = angular.forEach;


    /////////////////////////////////////////////
    angular.module("app")
        .component(COMPONENT, {
            templateUrl: ["appFilePathConst", function (appFilePathConst) { return appFilePathConst[ME]; }],
            bindings: {
                folders: '<'
            },
            controller: app_menu_ctrl
        });


    //***************************************************
    app_menu_ctrl.$inject = ["$log"];
    function app_menu_ctrl($log) {

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

