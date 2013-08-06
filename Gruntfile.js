module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-component');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    component: {
      build: {
        options: {}
      }
    },
    express: {
      options: {
        background: true
      },
      dev: {
        options: {
          script: 'bin/dev.js'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['component', 'express:dev'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('build', ['component']);
  grunt.registerTask('dev', ['build', 'express:dev', 'watch']);
  grunt.registerTask('default', ['dev']);
};