(function () {
    "use strict";

    angular.module('app')
        .constant('appFilePathConst', getFilePath());

    ////////////////////////////////////////////
    function getFilePath() {
        return {
            "app-menu": 'app/menu/menu.html',
            "app-content": 'app/content/content.html',
            "app-container": 'app/container/container.html',
        };
    }




}());
