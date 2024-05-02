module.exports = function (grunt) {
  //configuration
  grunt.initConfig({
    uglify: {
      build: {
        files: [{
          src: 'scripts/jquery-3.7.1.js',
          dest: 'build/jquery-3.7.1.min.js'
        }]
      }
    },
    concat: {
      js: {
        src: ['scripts/*.js'],
        dest: 'build/concat-scripts.js'
      },
      css: {
        src: ['styles/*.css'],
        dest: 'build/concat-styles.css'
      }
    }
  });
  //Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //Register Tasks
}