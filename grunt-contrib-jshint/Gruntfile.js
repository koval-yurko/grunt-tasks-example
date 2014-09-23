module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    jshint: {
      main: ['js/main.js'],
      options: {
          jshintrc: true
      }
    },
  })

  grunt.registerTask('default', ['watch']);

  return grunt;
};

