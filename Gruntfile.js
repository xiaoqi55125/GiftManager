/**
 * more detail: 
 * http://gruntjs.com/configuring-tasks
 * http://gruntjs.com/getting-started
 * grunt init file
 * @param  {Object} grunt the grunt instance
 * @return {null}       
 */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg     : grunt.file.readJSON("package.json"),

        //task : uglify config
        uglify  : {
            options     : {
                banner  : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            js          : {
                src     : "public/src/javascript/*.js",
                dest    : "public/target/javascript/gift.min.js"
            },
            css         : {
                src     : "public/src/stylesheets/*.css",
                dest    : "public/target/stylesheets/gift.min.css"
            }
        },

        //task : jshint config
        jshint  : {
            options     : {
                globals : {
                    module       : true,
                    __dirname    : true,
                    require      : true,
                    console      : true,
                    exports      : true
                },
                ignores : [
                            "public/src/libs/*.js",
                            "public/target/*.js"
                ]
            },
            src         : [
                            "controller/*.js",
                            "proxy/*.js",
                            "routes.js",
                            "config.js",
                            "app.js",
                            "appConfig.js"
            ]
        }
    });

    //load tasks
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    //register task as default
    grunt.registerTask("default", ['uglify','jshint']);
};