(function () {

    "use strict";

    describe("BookmarkService", function () {

        var service, dataService;

        beforeEach(module("BookmarkApp"));

        beforeEach(module(function ($provide) {
            $provide.service('BookmarkDataService', function () {
                return {
                    getData: {}
                };
            });
        }));


        beforeEach(inject(function ($injector) {
            service = $injector.get("BookmarkService");
            dataService = $injector.get("BookmarkDataService");
        }));

        it('is defined', function () {
            expect(service).not.toBeNull();
            expect(service).not.toBe(null);
        });


        describe("getData()", function () {

            it('is defined and is a function', function () {
                var actual = service.getData;

                expect(actual).toBeDefined();
                expect(actual).not.toBeNull();
                expect(angular.isFunction(actual)).toEqual(true);
            });

            it('is OK when NO title', function () {

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


            it('is OK when url has NO http prefix', function () {

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


            it('is OK for multi-urls', function () {

                var data = [{
                    bkmrks: [{
                        type: "multi-urls",
                        urls: [
                            "no-http.com",
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


            it('is OK for separator', function () {

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


        describe("getDataRows()", function () {

            it('is defined and is a function', function () {
                var actual = service.getDataRows;

                expect(actual).toBeDefined();
                expect(actual).not.toBeNull();
                expect(angular.isFunction(actual)).toEqual(true);
            });

            it('returns valid data', function () {

                dataService.getData = jasmine.createSpy().and.returnValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                var actual = service.getDataRows();
                expect(actual).toEqual([[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15]]);
                //dump(actual);
            });
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