
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
    fn.$inject = ['$log', '$window'];
    function fn($log, $window) {
        var ctrl = this;

        extend(ctrl, {
            openMultiUrls: openMultiUrls
        });

        return ctrl;
        /////////////////

        ///////////////////////////
        function openMultiUrls (urls) {
            angular.forEach(urls, function (value) {
                $window.open(value);
            });
        };

    }


})();

