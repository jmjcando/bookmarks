(function () {
    "use strict";

    angular.module("BookmarkApp").controller("BookmarkCtrl", BookmarkCtrl);

    BookmarkCtrl.$inject = ["$window", "BookmarkService"];

    function BookmarkCtrl($window, dataService) {

        var ctrl = this;

        angular.extend(ctrl, {
            folders: dataService.getData(),
            openMultiUrls: openMultiUrls
        });

        return;
        ///////////////////

        function openMultiUrls (urls) {
            angular.forEach(urls, function (value) {
                $window.open(value);
            });
        };

    }

}());

