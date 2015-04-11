module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // 建置
    sass: {
      options: {
        includePaths: ['public/components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true
        },
        files: {
          'public/css/app.css': 'src/scss/app.scss'
        }
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
        files: [ 'public/**', 'views/**' ],
      },
      stylesheet: {
        files: [ 'src/scss/**/*.scss' ],
        tasks: [ 'sass' ]
      },
      express: {
        files:  [ '**/*.js', '!public/**', '!views/**', 'src/scss/**',
                  '!node_modules/**', '!public/components/**', '!bin/**' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','express:dev','watch']);
}
