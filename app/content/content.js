
(function () {

    "use strict";

    var ME = "app-content";
    var COMPONENT = "appContent";

    var extend = angular.extend,
        forEach = angular.forEach;

    /////////////////////////////////////////////
    angular.module("app")
        .component(COMPONENT, {
            templateUrl: ["appFilePathConst", function (appFilePathConst) { return appFilePathConst[ME]; }],
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

