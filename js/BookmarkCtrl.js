(function () {
    "use strict";

    angular.module("BookmarkApp").controller("BookmarkCtrl", BookmarkCtrl);

    BookmarkCtrl.$inject = ["$window", "$log", "$location", "BookmarkService"];

    function BookmarkCtrl($window, $log, $location, dataService) {

        var ctrl = this;

        $log.info("$window.location.search:", $window.location.search);
        $log.warn("$location.search():", $location.search());

        angular.extend(ctrl, {
            //dataService: dataService,
            version: getVersion(),
            folders: dataService.getData(),
            folderRows: dataService.getDataRows(),
            openMultiUrls: openMultiUrls
        });

        return;
        ///////////////////


        ////////////////
        function getVersion() {
            var qs = $window.location.search;

            return (/old/i).test(qs) ? "old" : "new";
        }


        ///////////////////////////
        function openMultiUrls (urls) {
            angular.forEach(urls, function (value) {
                $window.open(value);
            });
        };

    }

}());

