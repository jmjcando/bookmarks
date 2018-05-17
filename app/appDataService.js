(function () {

    "use strict";

    var ME = 'app-data-service';
    var SERVICE = 'appDataService';

    angular.module('app')
        .service(SERVICE, appDataService);


    ////////////////////////////////////////////////////
    appDataService.$inject = ["$log",  "appDataConst", 'appMockDataConst'];
    function appDataService($log,  appDataConst, appMockDataConst) {

        var service = this;
        
        angular.extend (service, {

            getData: getData,
            getDataRows: getDataRows,
        });

        return service;
        /////////////



        //********************
        function getData(options) {

            options = options || {};
            var data = options.mock ? appMockDataConst: appDataConst;
            //var data = angular.copy(_d);
            fixData(data);

            $log.log(ME, 'getData', data.length);
            return data;
        }


        //********************
        function getDataRows(data, options) {

            options = options || {};

            var columns = options.columns || 6,
                rows = []
                ;

            for (var i = 0; i < data.length; i = i + columns) {
                rows.push(data.slice(i, i + columns));
            }

            $log.log(ME, 'getDataRows', rows.length);
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
