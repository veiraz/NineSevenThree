module.exports = function (grunt) {
  'use strict';

  // load time-grunt and all grunt plugins found in the package.json
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      build: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['main.css'],
          dest: 'css/'
        }]
      }
    },

    browserSync: {
      serve: {
        options: {
          watchTask: true,
          server: {
            baseDir: '/'
          }
        },
        bsFiles: {
          src: [
            '*.html',
            '**/*.scss',
            '**/*.css',
            '**/*.js',
            '**/*.png',
            '**/*.jpg'
          ]
        }
      }
    },

    clean: {
      deploy: {
        src: ['_gh_pages']
      }
    },

    copy: {
      deploy: {
        files: [{
          expand: true,
          cwd: '/',
          src: '**/*',
          dest: '_gh_pages/'
        }]
      }
    },

    csscomb: {
      build: {
        options: {
          config: '.csscomb.json'
        },
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['main.css'],
          dest: 'css/'
        }]
      }
    },

    sass: {
      build: {
        options: {
          sourcemap: "none",
          unixNewlines: true
        },
        files: [{
          expand: true,
          cwd: '_scss/',
          src: ['main.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },

    watch: {
      serve: {
        files: [
          '*.html',
          '**/*.scss',
          '**/*.css',
          '**/*.js',
          '**/*.png',
          '**/*.jpg'
        ],
        tasks: ['build']
      }
    }

  });

  grunt.registerTask('build', [
    'sass:build', 'autoprefixer:build', 'csscomb:build'
  ]);

  // browsersync task
  grunt.registerTask('serve', ['browserSync', 'watch']);

  // deploy task
  grunt.registerTask('deploy', ['build', 'clean:deploy', 'copy:deploy']);

  // default task
  grunt.registerTask('default', 'build');
}
