module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-processhtml');

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    processhtml : {
      main : {
          options : {
            process : true,
            data : {}
          },
          files: {
              'index.min.html': ['index.html']
          }
      }
    },
  })

  grunt.registerTask('default', ['processhtml']);

  return grunt;
};

