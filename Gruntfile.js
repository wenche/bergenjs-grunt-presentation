/*global module:false */
module.exports = function(grunt) {

  grunt.registerTask("reload", "reload Chrome on OS X",
    function() {
      require("child_process").exec("osascript " +
        "-e 'tell application \"Google Chrome\" " +
        "to tell the active tab of its first window' " +
        "-e 'reload' " +
      "-e 'end tell'");
    });

    grunt.initConfig({
      jshint: {
        options: {
          globals: {require:true}
        },
        gruntfile: {
          src: 'Gruntfile.js'
        }
      },

      watch: {
        gruntfile: {
          files: '<%= jshint.gruntfile.src %>',
          tasks: ['jshint:gruntfile']
        },
        src: {
          files: "src/*",
          tasks: ['shower', 'reload']
        }
      },

      connect: {
        server: {
          options: {
            port: 9091,
            base: "./",
            keepalive: true
          }
        }
      },

      shower: {
        grunt: {
          title: "Grunt.js",
          src: "src/gruntjs.md",
          styles: "src/styles.css"
        }
      },

      curl: {
        'scripts/script.js': 'http://shwr.me/shower/shower.min.js'
      }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shower-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-curl');

    // Default task.
    grunt.registerTask('present', ['curl', 'shower', 'connect']);
    grunt.registerTask('default', ['jshint']);

};
