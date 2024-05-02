module.exports = function (grunt) {
  //configuration
  grunt.initConfig({
    uglify: {
      build: {
        files: [{
          src: 'script/jquery-3.7.1.js',
          dest: 'build/jquery-3.7.1.min.js'
        }]
      }
    }
  });
  //Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //Register Tasks
}