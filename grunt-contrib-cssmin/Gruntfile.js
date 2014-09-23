module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    cssmin: {
      main: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    },
  })

  grunt.registerTask('default', ['watch']);

  return grunt;
};

