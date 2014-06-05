module.exports = function(grunt) {
  'use strict';

  // force unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function(string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  // load time-grunt and all grunt plugins found in the package.json
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        stripBanners: false,
      },
      dist: {
        src: ['css/_src/normalize.css', 'css/_src/*.css'],
        dest: 'dist/css/nineseventhree.css',
        options: {
          banner: '/*! <%= pkg.name %> | v<%= pkg.version %> | <%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
        }
      },
      test: {
        src: ['css/_src/libs/*.css', 'css/_src/*.css'],
        dest: 'css/nineseventhree.css',
        options: {
          banner: '/*! <%= pkg.name %> | test build | <%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
        }
      }
    },
    csscomb: {
      options: {
        config: 'css/_src/.csscomb.json'
      },
      dist: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/'
      },
      test: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/'
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      }
    },

    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      },
      jekyllServe: {
        command: 'jekyll serve'
      }
    },

    watch: {
      files: [
        '_layouts/*.html',
        '_posts/*.md',
        '_drafts/*.md',
        'css/*.css',
        'css/_src/*.css',
        '_config.yml',
        'index.html',
        '404.html'
      ],
      tasks : ['int'],
      options : {
        spawn : false,
        interrupt : true,
        atBegin : true,
        livereload : true
      }
    }
  });

  // register custom grunt tasks
  grunt.registerTask('test', ['concat:test', 'csscomb:test']);
  grunt.registerTask('dist', ['concat:dist', 'csscomb:dist', 'cssmin']);
  grunt.registerTask('int', ['test', 'shell:jekyllBuild']);

  grunt.registerTask('default', ['test']);
};
