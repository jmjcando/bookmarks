(function () {
    "use strict";

    var ME = 'mainContainer';

    /////////////////////////////////////////////
    angular.module("app")
        .component(ME, {
            templateUrl: ["APP_CONST", function (APP_CONST) { return APP_CONST.filePath[ME]; }],
            bindings: {},
            controller: fn
        });


    ///////////////////////////
    fn.$inject = ["$log", '$window', "dataService"];
    function fn($log, $window, dataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            isOldVersion: /old/i.test($window.location.search),
            folders: dataService.data,
            folderRows: dataService.dataRows,
            
        });

        $log.log(ME, ctrl);

        return;
        ///////////////////

    }

}());

