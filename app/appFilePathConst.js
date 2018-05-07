(function () {
    "use strict";

    angular.module('app')
        .constant('appFilePathConst', getFilePath());

    ////////////////////////////////////////////
    function getFilePath() {
        return {
            "app-menu": 'app/menu/menu.html',
            "app-menu-one": 'app/menu/1/menu-one.html',

            "app-content": 'app/content/content.html',
            "app-content-one": 'app/content/1/content-one.html',
            "app-content-two": 'app/content/2/content-two.html',

            "app-container": 'app/container/container.html'
        };
    }




}());
