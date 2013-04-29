# BergenJS Grunt

[Author](http://raymondjulin.com/)

!SLIDE #grunt

![Image](images/grunt-logo.png)

!SLIDE

## A JavaScript task runner

Automate common tasks for you.

* Linting
* Building
* Testing
* Compiling
* +++

!SLIDE

## Automate all the things

```bash
grunt present
```

1. Fetches the latest version of dependencies
2. Compiles my markdown to html
3. Fires up a web server
4. Reloads chrome

!SLIDE

## Gruntfile.js anatomy

```
module.exports = function(grunt) {
  grunt.initConfig({
    task: options
  });
  grunt.registerTask('default', ['task']);
};
```

!SLIDE

## @@grunt jshint@@

```js
jshint: {
  files: {
    src: '**/*.js'
  }
}
```

!SLIDE
## @@grunt uglify@@
```
uglify: {
  my_target: {
    files: {
      'dist/all.min.js': 'scripts/*.js'
  }
}
```

!SLIDE

## @@grunt coffee@@

```
coffee: {
  compile: {
    files: {
      'scripts/scripts.js': 'src/*.coffee'
    }
  }
}
```

!SLIDE

## How bout some CSS?

* All popular pre-processors available
* image-inliners
* csscss
* +lots of other tools

!SLIDE #curl

## @@grunt curl@@
Grab online assets
```
curl: {
  'scripts/jquery.js': 'http://code.jquery.com/jquery-1.9.1.js'
}
```
