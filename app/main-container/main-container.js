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
    fn.$inject = ["$window", "$log", "BookmarkService"];
    function fn($window, $log, dataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            //dataService: dataService,
            isOldVersion: /old/i.test($window.location.search),
            folders: dataService.getData(),
            folderRows: dataService.getDataRows(),
            openMultiUrls: openMultiUrls
        });

        $log.log(ME, ctrl);


        return;
        ///////////////////



        ///////////////////////////
        function openMultiUrls (urls) {
            angular.forEach(urls, function (value) {
                $window.open(value);
            });
        };

    }

}());

