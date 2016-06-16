(function () {
    "use strict";

    angular.module("BookmarkApp").controller("BookmarkCtrl", BookmarkCtrl);

    BookmarkCtrl.$inject = ["$window", "$log", "BookmarkService"];

    function BookmarkCtrl($window, $log, dataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            //dataService: dataService,
            isOldVersion: isOldVersion,
            folders: dataService.getData(),
            folderRows: dataService.getDataRows(),
            openMultiUrls: openMultiUrls
        });

        return;
        ///////////////////


        ////////////////
        function isOldVersion() {
            var qs = $window.location.search;

            return (/old/i).test(qs);
        }


        ///////////////////////////
        function openMultiUrls (urls) {
            angular.forEach(urls, function (value) {
                $window.open(value);
            });
        };

    }

}());

