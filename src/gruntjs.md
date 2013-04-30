# Grunt.js

by [Raymond Julin](http://raymondjulin.com/)

!SLIDE center

![Image](images/grunt-logo.png)

!SLIDE

## A JavaScript task runner

* Linting
* Building
* Testing
* Compiling
* +++

!SLIDE #automate-all-the-things


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
## @@[grunt handlebars](https://npmjs.org/package/grunt-contrib-handlebars)@@
```
handlebars: {
  compile: {
    options: {
      namespace: 'JST'
    },
    files: {
      'path/to/templates.js': 'views/*.hbs'
    }
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

## @@grunt watch@@

```
watch: {
  css: {
    files: "sass/*.sass",
    tasks: "compass"
  }
}
```

Compile, build, test. Do it all on all changes.

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

## Complete example

@@@grunt present@@@

-? D/l presentation tool @@grunt-curl@@
-? Generate slide markup from markdown @@grunt-shower-markdown@@
-? Start a web server @@grunt-connect@@
-? Reload web page @@custom task@@

!SLIDE

## Multi task

```
grunt.registerTask('present', [
  'curl',
  'shower',
  'connect',
  'reload'
]);
```

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

## @@[grunt connect](https://npmjs.org/package/grunt-contrib-connect)@@

```
connect: {
  server: {
    options: {
      port: 9091,
      base: './',
      keepalive: true
    }
  }
}
```

!SLIDE

## @@grunt reload@@

  ```
  grunt.registerTask("@@reload@@", "reload Chrome on OS X",
    function() {
      require("child_process").exec("osascript " +
        "-e 'tell application \"Google Chrome\" " +
        "to tell the active tab of its first window' " +
        "-e 'reload' " +
      "-e 'end tell'");
    });
  ```
