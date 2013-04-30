# Grunt.js

by [Raymond Julin](http://raymondjulin.com/)

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

## @@grunt present@@

Automate all the things!

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

## @@[grunt jshint](https://npmjs.org/package/grunt-contrib-jshint)@@

```js
jshint: {
  files: {
    src: '**/*.js'
  }
}
```

!SLIDE
## @@[grunt uglify](https://npmjs.org/package/grunt-contrib-uglify)@@
```
uglify: {
  my_target: {
    files: {
      'dist/all.min.js': 'scripts/*.js'
  }
}
```

!SLIDE

## @@[grunt coffee](https://npmjs.org/package/grunt-contrib-coffee)@@

```
coffee: {
  compile: {
    files: {
      'scripts/scripts.js': 'src/*.coffee'
    }
  }
}
```

!SLIDE #curl

## @@[grunt curl](https://npmjs.org/package/grunt-curl)@@
Grab online assets
```
curl: {
  'scripts/jquery.js': 'http://code.jquery.com/jquery-1.9.1.js'
}
```

!SLIDE

## @@[grunt compass](https://npmjs.org/package/grunt-contrib-compass)@@

```
compass: {
  dist: {
    dev: {
      sassDir: 'sass',
      cssDir: 'css'
    }
  }
}
```

!SLIDE

## Compile on change

```
watch: {
  css: {
    files: "sass/*.sass",
    tasks: "compass"
  }
}
```

!SLIDE

## Other CSS Tools

* [Stylus](https://npmjs.org/package/grunt-contrib-stylus)
* [Less](https://npmjs.org/package/grunt-recess)
* [CSSLint](https://npmjs.org/package/grunt-contrib-csslint)
* [CSSCSS](https://npmjs.org/package/grunt-csscss)
* [CSSMin](https://npmjs.org/package/grunt-contrib-cssmin)

!SLIDE tight

## @@[grunt jasmine](https://npmjs.org/package/grunt-contrib-jasmine)@@

```
jasmine: {
  mylib: {
    src: 'scripts/*.js',
    options: {
      vendor: [
        'libs/jquery.js'
      ],
      specs:  'specs/*.js'
    }
  }
}
```

!SLIDE

## ... with AMD support:

```
jasmine: {
  mylib: {
    options: {
      template: require('grunt-template-jasmine-requirejs')
    }
  }
}
```

!SLIDE

## @@[grunt docco](https://npmjs.org/package/grunt-docco)@@

```
docco: {
  docs: {
    src: 'scripts/*.js',
    options: {
      output: 'docs/'
    }
  }
}
```

!SLIDE

## On the side

!SLIDE

## @@[grunt shower](https://npmjs.org/package/grunt-shower-markdown)@@

```
shower: {
  grunt: {
    title: "BergenJS Grunt",
    src: "src/index.md",
    styles: "src/styles.css"
  }
}
```

!SLIDE

## @@grunt present@@
1. D/l presentation tool
2. Generate slide markup from markdown
3. Start a web server

```
grunt.registerTask('present', [
  'curl',
  'shower',
  'connect'
]);
```
