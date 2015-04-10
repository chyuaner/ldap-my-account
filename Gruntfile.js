module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        background: true,
        port: 3000,
        debug: false
      },
      dev: {
        options: {
          script: 'bin/www'
        }
      }
//      prod: {
//        options: {
//          script: 'path/to/prod/server.js',
//          node_env: 'production'
//        }
//      },
//      test: {
//        options: {
//          script: 'path/to/test/server.js'
//        }
//      }
    },
    watch: {
      options: {
        livereload: true
      },
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', []);
  grunt.registerTask('default', ['build','express:dev','watch']);
}
