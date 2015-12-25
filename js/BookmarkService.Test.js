(function () {

    "use strict";

    describe("BookmarkService", function () {

        var service, dataService;

        beforeEach(module("BookmarkApp"));

        beforeEach(module(function ($provide) {
            $provide.service('BookmarkDataService', function () {
                dataService = {
                    getData: {}
                };
                return dataService;
            });
        }));


        beforeEach(inject(function ($injector) {
            service = $injector.get("BookmarkService");
        }));

        it('is defined', function () {
            expect(service).not.toBeNull();
            expect(service).not.toBe(null);
        });

        it('getData property is defined', function () {
            expect(service.getData).toBeDefined();
            expect(service.getData).not.toBeNull();
        });

        it('getData() works OK when NO title', function () {

            var data = [{
                bkmrks: [
                    { url: "http://no-title.com" },
                ]
            }];
            var expected = [{
                bkmrks: [{
                    title: "http://no-title.com",
                    url: "http://no-title.com"
                }]
            }];

            dataService.getData = jasmine.createSpy().and.returnValue(data);
            var actual = service.getData();

            expect(actual).toEqual(expected);
        });


        it('getData() works OK when url has NO http prefix', function () {

            var data = [{
                bkmrks: [
                    { url: "no-title.com" },
                ]
            }];
            var expected = [{
                bkmrks: [{
                    title: "no-title.com",
                    url: "http://no-title.com"
                }]
            }];

            dataService.getData = jasmine.createSpy().and.returnValue(data);
            var actual = service.getData();

            expect(actual).toEqual(expected);
        });


        it('getData() works OK for multi-urls', function () {

            var data = [{
                bkmrks: [{
                    type: "multi-urls",
                    urls: [
                        "no-http.com" ,
                        "http://goodurl.com" 
                    ]
                }]
            }];
            var expected = [{
                bkmrks: [{
                    type: "multi-urls",
                    urls: [
                        "http://no-http.com",
                        "http://goodurl.com"
                    ]
                }]
            }];

            dataService.getData = jasmine.createSpy().and.returnValue(data);
            var actual = service.getData();

            expect(actual).toEqual(expected);
        });


        it('getData() works OK for separator', function () {

            var data = [{
                bkmrks: [{
                    type: "separator"
                }]
            }];
            var expected = [{
                bkmrks: [{
                    type: "separator",
                }]
            }];

            dataService.getData = jasmine.createSpy().and.returnValue(data);
            var actual = service.getData();

            expect(actual).toEqual(expected);
        });

    });

})();

/*

{
                    "title": "FAV-1",
                    bkmrks: [
                        { type: 'multi-urls', title: "open-all", urls: ["nohttp.com", "http://www.yahoo.com"] },
                        { title: "Gmail", url: "https://gmail.com" },
                        { title: "NO http google", url: "google.com" },
                        { url: "no-title.com" },
                        { type: "separator" },
                    ]
                }

*/