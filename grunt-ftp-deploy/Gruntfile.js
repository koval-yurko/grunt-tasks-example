module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    'ftp-deploy': {
      main : {
        auth: {
          host: '178.248.171.24',
          port: 21,
          authKey: 'gp-live'
        },
        src: '.',
        dest: '/guiltypeople/beta/duifhuizen.whatsinthebag',
        exclusions: [
          'crosspixel.js',
          'FILES',
          'nbproject',
          'node_modules',
          'bower_components',
          'package.json',
          'bower.json',
          'Gruntfile.js',
          '.git',
          '.ftppass',
          '.gitignore',
          '.jshintrc',
          'sprites.psd',
          'fonts'
        ]
      },
      init : {
        auth: {
          host: '178.248.171.24',
          port: 21,
          authKey: 'gp-live'
        },
        src: '.',
        dest: '/guiltypeople/beta/duifhuizen.whatsinthebag',
        exclusions: [
          'crosspixel.js',
          'FILES',
          'nbproject',
          'node_modules',
          'bower_components',
          'package.json',
          'bower.json',
          'Gruntfile.js',
          '.git',
          '.ftppass',
          '.gitignore',
          '.jshintrc',
          'sprites.psd'
        ]
      },
      index : {
        auth: {
          host: '178.248.171.24',
          port: 21,
          authKey: 'gp-live'
        },
        src: 'dest',
        dest: '/guiltypeople/beta/duifhuizen.whatsinthebag'
      },
      css : {
        auth: {
          host: '178.248.171.24',
          port: 21,
          authKey: 'gp-live'
        },
        src: './css',
        dest: '/guiltypeople/beta/duifhuizen.whatsinthebag/css'
      },
      js : {
        auth: {
          host: '178.248.171.24',
          port: 21,
          authKey: 'gp-live'
        },
        src: './js',
        dest: '/guiltypeople/beta/duifhuizen.whatsinthebag/js'
      }
    }
  })

  grunt.registerTask('default', ['watch']);

  return grunt;
};

