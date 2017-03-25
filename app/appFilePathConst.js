(function () {
    "use strict";

    angular.module('app')
        .constant('appFilePathConst', getFilePath());

    ////////////////////////////////////////////
    function getFilePath() {
        return {
            "app-menu": '/app-menu.tpl',
            "app-content": '/app-content.tpl',
            "app-main-container": 'app/main-container/main-container.html',
        };
    }




}());
