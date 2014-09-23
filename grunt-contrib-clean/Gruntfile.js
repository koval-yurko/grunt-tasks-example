module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    clean: {
      main: [
        "bower_components"
      ]
    }
  })

  grunt.registerTask('default', ['clean']);

  return grunt;
};

