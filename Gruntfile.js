module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    watch: {
      views: {
        files: ['*.js'],
        tasks: [''],
        options: {
          spawn: false,
        },
      },
    },
  })

  grunt.registerTask('default', ['watch']);

  return grunt;
};

