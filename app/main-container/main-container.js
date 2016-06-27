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
    fn.$inject = ["$log", '$window', "BookmarkService"];
    function fn($log, $window, dataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            //dataService: dataService,
            isOldVersion: /old/i.test($window.location.search),
            folders: dataService.getData(),
            folderRows: dataService.getDataRows(),
            
        });

        $log.log(ME, ctrl);
        

        return;
        ///////////////////



    }

}());

