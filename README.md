centered-culture
================

Requirements:

* mongodb
* node.js 0.8
* ruby and jekyll to compile static templates

To install, clone the repository and run:

```
npm install
git submodule init
git submodule update
```

Statically-compiled templates are checked in, but to compile your own, optionally install jekyll.  You need to use RVM, Homebrew or some other package-manager to install ruby and ruby-gems:

```
sudo gem install jekyll
```

To start mongodb:

```
mongod
```

To start the server:

```
node index.js
```

To run tests:

```
npm test
```

To print debug statements while running tests or the server, prepend `DEBUG=[packagename],[otherpackage]`. Wildcards are allowed.

```
DEBUG=cc-*,bones-boiler:* npm test
```