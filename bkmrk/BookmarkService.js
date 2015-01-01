
angular.module('BookmarkApp')
    .service('BookmarkService', function (BookmarkMockDataService, BookmarkDataService) {

        var me = this;

        // ********************
        function fixData(folderData) {

            angular.forEach(folderData, function (folder) {
                angular.forEach(folder.bkmrks, function (bookmark) {

                    // fix title
                    if (angular.isUndefined(bookmark.title)) {
                        bookmark.title = bookmark.url;
                    }

                    // fix url
                    bookmark.url = fixUrl(bookmark.url);

                    // fix urls within multi urls
                    if (bookmark.type == 'multi-urls' && angular.isDefined(bookmark.urls)) {
                        angular.forEach(bookmark.urls, function (url, urlIndex) {
                            bookmark.urls[urlIndex] = fixUrl(url);
                        });
                    }

                    //console.log(bookmark);
                });

            });
        }


        // **********************************************
        function fixUrl(url) {

            var prefix = (angular.isDefined(url) && !url.match(/^http/i)) ? "http://" : "";
            return (prefix  + url);
        }


        // **********************************************
        function init() {

            me.folderData = BookmarkDataService; // BookmarkMockDataService
            fixData (me.folderData);
        }

        init();
    });


