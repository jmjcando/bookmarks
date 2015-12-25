(function () {

    "use strict";

    describe("BookmarkService", function () {

        var service;

        beforeEach(module("BookmarkApp"));

        ////////////////////////////////////
        //  alternate method
        ////////////////////////////////////
        beforeEach(inject(function ($injector) {
            service = $injector.get("BookmarkService");
        }));

        

        fit('is defined', function () {
            expect(service).not.toBeNull();
            expect(service).not.toBe(null);
        });

        fit('folderData is defined', function () {
            expect(service.folderData).toBeDefined();
            expect(service.folderData).not.toBeNull();
        });

        it('name(property) is as expected', function () {
            expect(service.name).toBe("Welcome");
        });

        it('method() is defined', function () {
            expect(service.method).toBeDefined();
        });

        it('method() returns as expected', function () {
            expect(service.method()).toEqual(["a1", "b2", "c3"]);
        });

    });

})();
