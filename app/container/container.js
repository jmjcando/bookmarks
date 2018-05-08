(function () {
    "use strict";

    var ME = 'app-container';
    var ME_snakeCase = 'appContainer';

    /////////////////////////////////////////////
    angular.module("app")
        .component(ME_snakeCase, {
            templateUrl: ["appFilePathConst", function (appFilePathConst) { return appFilePathConst[ME]; }],
            bindings: {},
            controller: app_container_ctrl
        });


    ///////////////////////////
    app_container_ctrl.$inject = ["$log", "appDataService"];
    function app_container_ctrl($log, appDataService) {

        var ctrl = this;

        angular.extend(ctrl, {

            "getVersion": function () { return appDataService.version; },
            "getFolders": function () { return appDataService.data; },
            "getFolderRows": function () { return appDataService.dataRows; }

        });

        $log.log(ME, ctrl);

        return;
        ///////////////////

    }

}());

