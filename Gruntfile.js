module.exports = function(grunt){
  var path = require('path');
  var matchdep = require('matchdep');

  // load all grunt-plugin tasks
  matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('bootcamp');

  // init config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      test: {
        options: {
          style: 'expanded',
          loadPath: './node_modules/bootcamp/dist'
        },
        files: {
          './tests/results.css': './tests/tests.scss'
        }
      }
    },

    // Bootcamp
    bootcamp: {
      test: {
        files: {
          src: ['./tests/results.css']
        }
      }
    },

    // Watch
    watch: {
      dist: {
        files: ['./**/*.scss'],
        tasks: ['sass', 'bootcamp']
      }
    }
  });

  // resiter tasks
  grunt.registerTask('default', ['sass', 'bootcamp', 'watch']);
  grunt.registerTask('test', ['sass', 'bootcamp']);

};
