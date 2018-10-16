# Bundling

## Module format

1. IIFE
2. Asynchronous Module Definition (AMD)
3. CommomJS (CJS)
4. Universal Module Definition (UMD)
5. ES6 Modules

```
myGlobal                                <- Global

(function(){                            <- IIFE
    // my code here
})();

define(['jq'], function(jq){});         <- AMD

var express = require('express');       <- CommomJS

import express from 'express'           <- ES6 Module
```

## Why ES6 Module ?

1. Standardized
2. Statically Analyzable
    - Improved autocomplete 
    - Intelligent Refactoring 
    - Fails Fast
    - Tree Shaking
3. Easy to read
    - Names Exports
    - Default Exports


## Bundlers

1. Browserify
    - The first bundler to reach mass adoption
    - Bundle npm packages for the Web
    - Large plugin ecosystem
2. Webpack
    - Bundles more than just JS
    - Import CSS, images, etc like JS
    - Built in hot-reloading web server
3. Rollup
    - Tree Shaking
    - Faster loading production code
    - Quite new
    - Great for Library authors
    - Not hot reloading and code splitting yet
4. JSPM
    - Use SystemJS, a Universal Module Loader
    - Can load module at runtime
    - Has its own package manager
    - Can install from npm, git
    - Use Rollup
