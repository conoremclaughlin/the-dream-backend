centered-culture
================
To install, clone the repository and run:

```
npm install
git submodule init
git submodule update
```

To run:

```
node ./index.js
```

Requirements:

* mongodb
* node.js 0.8

To run tests:

```
npm test
```

To print debug statements while running tests, prepend `DEBUG=[packagename],[otherpackage]`. Wildcards are allowed.

```
DEBUG=cc-*,bones-boiler:* npm test
```