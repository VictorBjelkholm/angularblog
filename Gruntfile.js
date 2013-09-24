var fs = require('fs');

module.exports = function (grunt) {
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),
        posts: grunt.file.readJSON('posts.json')
    });

    grunt.registerTask('posts', function () {
        var posts = [];
        grunt.file.recurse('posts', function (file) {
            var date = file.substr(6, 10);
            var url = file.slice(0, -5);
            var exploded = file.split('-').splice(3, file.length);
            exploded[exploded.length - 1] = exploded[exploded.length - 1].slice(0, -5);
            var title = exploded.join(' ');
            var post = {
                date: date,
                title: title,
                url: url
            };
            posts.push(post);
        });
        posts.sort(function (a, b) {
            if (a.date < b.date)
              return 1;
            if (a.date > b.date)
              return -1;
            // a must be equal to b
            return 0;
        });
        fs.writeFileSync('posts.json', JSON.stringify(posts, null, 4));
    });

    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-karma');
    // grunt.registerTask('default', ['jshint', 'karma', 'concat', 'uglify']);
    grunt.registerTask('index', ['posts']);
};