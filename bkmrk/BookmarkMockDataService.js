
angular.module('BookmarkApp')
    .service('BookmarkMockDataService', function () {

        var service = [{
            "title": "FAV-1",
            bkmrks: [
                { type: 'multi-urls', title: "open-all", urls: ["nohttp.com", "http://www.yahoo.com"] },
                { title: "Gmail", url: "https://gmail.com" },
                { title: "NO http google", url: "google.com" },
                { url: "no-title.com" },
                { type: "separator" },
            ]
        }, {
            "title": "FAV-2",
            bkmrks: [
                { url: "spammotel.com" },
                { url: "freepops.org", note: "supports webmails." },
                { title: "Gmail", url: "https://gmail.com" },
                { title: "Gmail w/o http", url: "gmail.com" }
            ]
        }];

        return service;

    });
