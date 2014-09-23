module.exports = function(grunt) {

  // Project configuration.
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    'js-node-minify' : {
      main : {
        fileIn : [
          'js/main.js',
        ],
        fileOut : 'js/main.min.js',
        options: ['--compilation_level=SIMPLE_OPTIMIZATIONS --language_in=ECMASCRIPT5'],
      }
    }
  });

  grunt.registerMultiTask('js-node-minify', 'JS Google Compile by node-minify.', function() {
    var compressor = require('node-minify');
    var done = this.async();

    var fileIn = grunt.config([this.name, this.target, 'fileIn']);
    var fileOut = grunt.config([this.name, this.target, 'fileOut']);
    var options = grunt.config([this.name, this.target, 'options']);

    grunt.log.writeln('Google closoure compiler... ');

    new compressor.minify({
        type: 'gcc',
        fileIn: fileIn,
        fileOut: fileOut,
        options: options,
        callback: function(err, min){
            if (err) {
              grunt.fail.warn(err, 3)
            }
            else {
              done();
              grunt.log.writeln('Done -> '+ fileOut +'');
            }
        }
    });
  });

  grunt.registerTask('default', ['js-node-minify']);

  return grunt;
};

