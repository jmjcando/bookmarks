(function () {
    "use strict";

    var ME = 'app-container';
    var ME_snakeCase = 'appContainer';

    /////////////////////////////////////////////
    angular.module("app")
        .component(ME_snakeCase, {
            templateUrl: ["appFilePathConst", function (appFilePathConst) { return appFilePathConst[ME]; }],
            bindings: {},
            controller: fn
        });


    ///////////////////////////
    fn.$inject = ["$log", "appDataService"];
    function fn($log, appDataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            isOldVersion: appDataService.isOldVersion,
            folders: appDataService.data,
            folderRows: appDataService.dataRows,
            
        });

        $log.log(ME, ctrl);

        return;
        ///////////////////

    }

}());

