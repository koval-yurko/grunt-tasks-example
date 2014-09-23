module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-compass');

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'scss/config.rb'
        }
      }
    },
  })

  grunt.registerTask('default', ['watch']);

  return grunt;
};

