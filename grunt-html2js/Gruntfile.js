module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-html2js');

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    html2js: {
      views : {
        options: {
          module: 'myApp.templates',
          base: 'app',
          singleModule : true,
          htmlmin: {
            collapseWhitespace: true,
            removeComments: true
          }
        },
        src: ['app/views/**/*.html'],
        dest: 'app/views/templates.js'
      }
    }
  })

  grunt.registerTask('default', ['html2js']);

  return grunt;
};

