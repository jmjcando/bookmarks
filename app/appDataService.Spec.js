(function () {
    /*** not working, needs changes ******/

    "use strict";

    fdescribe("appDataService", function () {

        var $location, service, dataService;

        beforeEach(module("app"));

        beforeEach(module(function ($provide) {
            $provide.service('$location', function () {
                return {
                    search: function () {
                    }
                };
            });
        }));


        beforeEach(inject(function ($injector) {
            $location = $injector.get("$location");
            service = $injector.get("appDataService");
        }));

        it('is defined', function () {
            expect(service).toBeDefined();
            expect(service).not.toBeNull();
            expect(service).not.toBe(null);
        });

        describe("version", function () {

            it('is defined and is a string', function () {
                var actual = service.version;

                expect(actual).toBeDefined();
                expect(actual).not.toBeNull();
                expect(angular.isString(actual)).toEqual(true);
            });


            it('is defined and is a string', function () {
                $location.search = jasmine.createSpy().and.returnValue({ version: 'aaa' });

                var actual = service.version;

                expect(actual).not.toBeNull();
                expect(actual).toEqual('aaa');
            });


        });

        describe("data prop", function () {

            it('is defined and is an array', function () {
                var actual = service.data;

                expect(actual).toBeDefined();
                expect(actual).not.toBeNull();
                expect(angular.isArray(actual)).toEqual(true);
            });

            xit('is OK when NO title', function () {

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


            xit('is OK when url has NO http prefix', function () {

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


            xit('is OK for multi-urls', function () {

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


            xit('is OK for separator', function () {

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


        xdescribe("getDataRows()", function () {

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