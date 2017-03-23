(function () {

    "use strict";

    var ME = 'app-data-service';
    var SERVICE = 'appDataService';

    angular.module('app')
        .service(SERVICE, appDataService);

    ////////////////////////////////////////////////////
    appDataService.$inject = ['$location', '$log', '$routeParams', "appDataConst", 'appMockDataConst'];
    function appDataService($location, $log, $routeParams, appDataConst, appMockDataConst) {

        $log.log (ME, $routeParams);
        var service = this;
        var searchObject  = $location.search();
        searchObject.version = searchObject.version || null; 
        searchObject.data = searchObject.data || null; 
        
        var isOldVersion = /old/i.test(searchObject.version);
        var isMockData  = /mock/i.test(searchObject.data);

        var data = getData();
        var dataRows = getDataRows(data);

        angular.extend (service, {
            isOldVersion: isOldVersion,
            data: data,
            dataRows: dataRows,
        });

        return service;
        /////////////

        //********************
        function getData() {
            var _d = isMockData ? appMockDataConst: appDataConst;
            var data = angular.copy(_d);
            fixData(data);
            return data;
        }

        //********************
        function getDataRows(data, columns) {
            columns = columns || 6;
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
