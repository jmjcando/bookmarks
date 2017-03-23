(function () {
    /*** not working, needs changes ******/

    "use strict";

    describe("BookmarkDataService", function () {

        var service, dataService;

        beforeEach(module("BookmarkApp"));

        beforeEach(inject(function ($injector) {
            service = $injector.get("BookmarkDataService");
        }));

        it('is defined', function () {
            expect(service).not.toBeNull();
            expect(service).not.toBe(null);
        });

        it('getData property is defined', function () {
            var actual = service.getData;

            expect(actual).toBeDefined();
            expect(actual).not.toBeNull();
        });

        it('getMockData property is defined', function () {
            var actual = service.getMockData;

            expect(actual).toBeDefined();
            expect(actual).not.toBeNull();
        });

    });

})();


