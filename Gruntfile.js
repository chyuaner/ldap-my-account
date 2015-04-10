module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // 建置
    build: {
      scss: {
      }
    },

    // 建立伺服器
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
    },
    // 檔案監視
    watch: {
      options: {
        livereload: true
      },
      frontend: {
        files: [ 'public/**', 'views/**',
                 '!node_modules/**', '!bin/**' ],
      },
      stylesheet: {
        files: [ 'src/scss/**/*.scss',
                 '!node_modules/**', '!bin/**' ],
        tasks: []
      },
      express: {
        files:  [ '**/*.js', '!public/**', '!views/**', 'src/scss/**',
                  '!node_modules/**', '!bin/**' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', []);
  grunt.registerTask('default', ['build','express:dev','watch']);
}
