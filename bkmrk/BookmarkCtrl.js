
/* *******************  Controllers */
angular.module("BookmarkApp").controller("BookmarkCtrl", function (BookmarkService) {

    this.folders = BookmarkService.folderData;

    this.openMultiUrls = function (urls) {
        angular.forEach(urls, function (value) {
            window.open(value);
        });
    };

});

