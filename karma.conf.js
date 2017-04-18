module.exports = function (config) {
    config.set({

        basePath: './app/',

        files: [
            "./../bower_components/angular/angular.min.js",
            "./../bower_components/angular-mocks/angular-mocks.js",

            "App.js",
            "*.js",
        ],

        //exclude: [
        //    "_libs/external/js/*.min.js",
        //    "_libs/external/js/*.map",
        //    "angular-test/**/Simple*.js",
        //],

        autoWatch: true,
        frameworks: ['jasmine'],
        browserNoActivityTimeout: 0,
        browsers: [
            'PhantomJS',
            //'Chrome',
        ],

        plugins: [
            'karma-jasmine',

            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',

            'karma-junit-reporter',
            'karma-mocha-reporter',
        ],

        logLevel:
            //config.LOG_DEBUG,
            config.LOG_INFO,

        reporters: ["mocha"],  //'progress', junit, "dots"

        junitReporter: {
            outputFile: 'test-results.xml',
            suite: 'unit'
        },

        /*
            Value	Description
            full (default)	all output is printed to the console
            autowatch	first run will have the full output and the next runs just output the summary and errors in mocha style
            minimal	only the summary and errors are printed to the console in mocha style
            noFailures	the failure details are not logged
        */
        ////mochaReporter: {
        ////    //output: 'autowatch'
        ////},


        // report which specs are slower than 500ms
        reportSlowerThan: 500,


    });
};
