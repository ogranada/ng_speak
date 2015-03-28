module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/app.js',
        dest: 'dist/app.min.js'
      }
    },

    stylus: {
        compile: {
            options: {
                import: [
                    'nib'
                ],

            },
            files: {
                './css/styles.css': './css/styles.styl'
            }
        }
    },

    connect: {
        server: {
            options: {
                port: port,
                base: '.',
                livereload: true,
                open: true
            }
        }
    },

    watch: {
        options: {
            livereload: true
        },
        js: {
            files: [ 'Gruntfile.js', 'js/app.js', 'contacts.json']
        },
        css: {
            files: [ 'css/styles.styl' ],
            tasks: 'stylus'
        },
        html: {
            files: [ 'index.html', 'templates/contact.html']
        }
    }



  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'connect', 'watch']);

  // Serve presentation locally
  grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
