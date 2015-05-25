module.exports = function (grunt) {
  'use strict';

  // load all grunt plugins found in the package.json
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // package configuration
    pkg: grunt.file.readJSON('package.json'),

    // Sass compiling
    sass: {
      options: {
        precision: 6,
        sourceComments: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    },

    // vendor prefix handling
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      dist: {
        src: 'css/**/*.css'
      },
      docs: {
        src: '_site/**/*.css'
      }
    },

    // build tools
    watch: {
      sass: {
        files: ['scss/**/*.scss', 'docs/**'],
        tasks: ['default']
      }
    },

    jekyll: {
      options: {
        src: 'docs',
        config: '_config.yml'
      },
      docs: {
        dest: '_site'
      }
    }

  });

  // builds the page contents
  grunt.registerTask('default', ['sass', 'jekyll', 'autoprefixer']);

}
