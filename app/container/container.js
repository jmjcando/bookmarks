(function () {
    "use strict";

    var ME = 'app-container';
    var ME_snakeCase = 'appContainer';

    /////////////////////////////////////////////
    angular.module("app")
        .component(ME_snakeCase, {
            templateUrl: ["appFilePathConst", function (appFilePathConst) { return appFilePathConst[ME]; }],
            controller: appContainerCtrl
        });


    ///////////////////////////
    appContainerCtrl.$inject = ["$location", "$log", "appDataService"];
    function appContainerCtrl($location, $log, appDataService) {

        var searchObj = $location.search();
        searchObj.version = searchObj.version || 'three';
        searchObj.data = searchObj.data || '';

        var options = { "mock": /^mock$/i.test(searchObj.data) };

        var ctrl = this;

        angular.extend(ctrl, {

            "$onInit": onInit,
            "$onChanges": onChanges,

            "version": searchObj.version,

            "folders": appDataService.getData(options)
        });


        ctrl.folderRows = appDataService.getDataRows(ctrl.folders, options);


        $log.info(ME, 'searchObj', searchObj, "options", options);

        return;
        ///////////////////


        /////////////////
        function onInit() {
            $log.log(ME, 'onInit');
        }

        /////////////////
        function onChanges(changes) {
            $log.log(ME, 'onChanges', changes);
        }

    }

}());



/*
 
  *
 *
 *
<!--<ng-switch on="$ctrl.getVersion()">

    <app-menu-one ng-switch-when="one" folders="$ctrl.getFolders()"></app-menu-one>

    <app-menu ng-switch-default folders="$ctrl.getFolders()"></app-menu>

</ng-switch>-->
<!--<ng-switch on="$ctrl.getVersion()">

    <app-content-one ng-switch-when="one" folders="$ctrl.getFolders()"></app-content-one>

    <app-content-two ng-switch-when="two" folders="$ctrl.getFolderRows()"></app-content-two>

    <app-content ng-switch-default folders="$ctrl.getFolders()"></app-content>

</ng-switch>-->


   
    
     
      * 
 * */