(function () {    "use strict";

    angular.module("BookmarkApp").controller("BookmarkCtrl", BookmarkCtrl);

    BookmarkCtrl.$injector = ["$window", "BookmarkService"];

    function BookmarkCtrl($window, BookmarkService) {

        var ctrl = this;

        angular.extend(ctrl, {
            folders: BookmarkService.folderData,
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

