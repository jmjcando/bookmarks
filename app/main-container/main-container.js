(function () {
    "use strict";

    var ME = 'app-main-container';
    var COMPONENT = 'appMainContainer';

    /////////////////////////////////////////////
    angular.module("app")
        .component(COMPONENT, {
            templateUrl: ["APP_CONST", function (APP_CONST) { return APP_CONST.filePath[ME]; }],
            bindings: {},
            controller: fn
        });


    ///////////////////////////
    fn.$inject = ["$log", "dataService"];
    function fn($log, dataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            isOldVersion: dataService.isOldVersion,
            folders: dataService.data,
            folderRows: dataService.dataRows,
            
        });

        $log.log(ME, ctrl);

        return;
        ///////////////////

    }

}());

