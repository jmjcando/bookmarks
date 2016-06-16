(function () {
    "use strict";


    angular.module('BookmarkApp')
        .service('BookmarkService', BookmarkService);

    BookmarkService.$inject = ["BookmarkDataService"];

    function BookmarkService(dataService) {

        var service = this;

        angular.extend (service, {
            getData: getData,
            getDataRows: getDataRows,
        });

        return service;
        /////////////

        //********************
        function getData() {
            var data = angular.copy(dataService.getData());  //getMockData()

            fixData(data);
            return data;
        }

        //********************
        function getDataRows(columns) {
            columns = columns || 6;
            var data = getData();
            var rows = [];
            for (var i = 0; i < data.length; i = i + columns) {
                rows.push(data.slice(i, i + columns));
            }

            return rows;
        }


        //********************
        function fixData(folderData) {
            angular.forEach (folderData, function (folder) {
                angular.forEach (folder.bkmrks, fixBookmark);
            });
        }

        
        //********************
        function fixBookmark(bookmark) {

            switch (bookmark.type) {

                case 'multi-urls':
                    if (angular.isDefined(bookmark.urls)) {
                        angular.forEach(bookmark.urls, function (url, urlIndex) {
                            bookmark.urls[urlIndex] = fixUrl(url);
                        });
                    }
                    break;

                case 'separator':
                    break;

                default:
                    // fix title
                    if (angular.isUndefined(bookmark.title)) {
                        bookmark.title = bookmark.url;
                    }

                    // fix url
                    bookmark.url = fixUrl(bookmark.url);

                    break;
            }

        }

        //**********************************************
        function fixUrl(url) {

            var prefix = (angular.isDefined(url) && !url.match(/^http/i)) ? "http://" : "";
            return (prefix + url);
        }


    }



}());
