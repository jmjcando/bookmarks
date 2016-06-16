(function () {

    "use strict";

    describe("BookmarkCtrl", function () {

        var service, ctrl, $window;

        beforeEach(module("BookmarkApp"));

        beforeEach(module(function ($provide) {
            $provide.service('BookmarkService', function () {
                return {
                    getData: jasmine.createSpy().and.returnValue([1, 2, 3]),
                    getDataRows: jasmine.createSpy().and.returnValue([1, 2, 3]), 
                };
            });

            $provide.service('$window', function () {
                return {
                    open: angular.noop,
                    location: {
                        search: ""
                    }
                };
            });

        }));

        beforeEach(inject(function ($injector) {
            var $controller = $injector.get("$controller");
            ctrl = $controller('BookmarkCtrl');
            service = $injector.get("BookmarkService");
            $window = $injector.get("$window");
        }));

        it('is defined', function () {
            expect(ctrl).not.toBeNull();
            expect(ctrl).not.toBe(null);
        });

        
        it('isOldVersion is defined', function () {
            var expected = ctrl.isOldVersion;

            expect(expected).toBeDefined();
            expect(expected).not.toBeNull();
        });

        it('isOldVersion returns correctly', function () {

            $window.location.search = "old";
            var expected = ctrl.isOldVersion();
            expect(expected).toEqual(true);

            $window.location.search = "new";
            var expected = ctrl.isOldVersion();
            expect(expected).toEqual(false);

            $window.location.search = "old123";
            var expected = ctrl.isOldVersion();
            expect(expected).toEqual(true);
        });

        it('folders is defined', function () {
            var expected = ctrl.folders;

            expect(expected).toBeDefined();
            expect(expected).not.toBeNull();
        });


        it('folderRows is defined', function () {
            var expected = ctrl.folderRows;

            expect(expected).toBeDefined();
            expect(expected).not.toBeNull();
        });

        describe("openMultiUrls", function () {

            it('is defined', function () {
                var expected = ctrl.openMultiUrls;

                expect(expected).toBeDefined();
                expect(expected).not.toBeNull();
            });

            it('calls $window.open', function () {

                var spy = $window.open = jasmine.createSpy();
                ctrl.openMultiUrls(["aaa", "bbbb"]);

                expect(spy.calls.any()).toEqual(true);
                expect(spy.calls.count()).toEqual(2);
            });

            it('$window.open arguments verified', function () {

                var spy = $window.open = jasmine.createSpy();
                ctrl.openMultiUrls(["aaa", "bbbb"]);

                expect(spy.calls.allArgs()).toEqual([["aaa"], ["bbbb"]]);
            });

        });

    });

})();
