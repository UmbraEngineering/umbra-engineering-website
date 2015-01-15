
# Cloak Bootstrap

This repo contains a suggested app setup for when using the [Cloak.js](http://www.cloakjs.com) framework. It makes use of the following libraries/tools:

* cloak (obviously)
 * [cloak.core](https://github.com/UmbraEngineering/cloak.core)
 * [cloak.router](https://github.com/UmbraEngineering/cloak.router)
 * [cloak.controller](https://github.com/UmbraEngineering/cloak.controller)
 * [cloak.view](https://github.com/UmbraEngineering/cloak.view)
 * [cloak.view.handlebars](https://github.com/UmbraEngineering/cloak.view.handlebars)
 * [cloak.model](https://github.com/UmbraEngineering/cloak.model)
 * [cloak.localstorage](https://github.com/UmbraEngineering/cloak.localstorage)
 * [cloak.i18n](https://github.com/UmbraEngineering/cloak.i18n)
* [gulp](http://gulpjs.com/)
* [browserify](http://browserify.org/)
* [myth](http://www.myth.io/)
* [handlebars](http://handlebarsjs.com/)

Cloak is versital and generally not-opinionated, so many of these components can be replaced or removed and Cloak will still work just fine. This is just the way we use it, and we think its a pretty good way to go.

You can see in the above list we are using `cloak.localstorage` for this app. That stores all of your app data in a localStorage structure and is useful for many locally run applications. If, however, you need something more remote, you can use [cloak.xhr](https://github.com/UmbraEngineering/cloak.xhr) or [cloak.socketio](https://github.com/UmbraEngineering/cloak.socketio) instead.



## Getting Started

First, you need to fetch the repo, a simple `git clone` will do it. Then do an `npm install` to pull down all the dependencies and build tools.

```bash
$ git clone https://github.com/UmbraEngineering/cloak-bootstrap.git your-app
$ cd your-app
$ npm install
```

You can also remove the `.git` directory at this point if you want to start the repo history fresh

```bash
$ rm -rf ./.git
```

You will need gulp, so if you don't have it, you should probably pick it up.

```bash
$ npm install -g gulp
```





## Directory Structure

The directory structure is pretty straight-forward; files that are related to each other are grouped together. A view file, it's template(s), controller, and css are all stored together in one directory.

```
|-- your-app
|   |-- gulp
|   |   `-- tasks
|   |-- src
|   |   |-- i18n
|   |   |   |-- en-us
|   |   |   |   `-- index.js
|   |   |   `-- index.js
|   |   |-- routers
|   |   |   |-- index.js
|   |   |   `-- main.js
|   |   |-- views
|   |   |   |-- view
|   |   |   |   |-- index.js
|   |   |   |   |-- view.js
|   |   |   |   |-- view.hbs
|   |   |   |   `-- view.css
|   |   |-- normalize.css
|   |   |-- base.css
|   |   |-- controller.js
|   |   `-- main.js
|   |-- gulpfile.js
|   |-- package.json
|   `-- index.html
```

At the root of your app, you have the `gulp` directory which contains files for individual build tasks (eg. `gulp/tasks/browserify.js` which runs your JavaScript through Browserify).

The root also has your `gulpfile.js` (which basically just defers to the files in `gulp`), your `package.json` file with all of your dependencies, and your `index.html` file.

Now, to the real meat of the app structure, the `src` directory. This is where all of your JavaScript, your templates, and your css live. At the top of `src`, you have [`normalize.css`](http://necolas.github.io/normalize.css/), as well as a `base.css` file for your very basics (like setting your base typography).

The `main.js` file, as its name suggests, is your main JavaScript file that starts up your app. It sets up your templating engine (Handlebars in this case), loads your templates, starts the app router ... you know ... basic stuff.

The `routers` directory contains your router files. First, take a look at `routers/main.js`. This is your main router that runs your application. It should look like a pretty normal cloak router. `routers/index.js` is where you create your router instance and `.use` any sub-routers. Then, that main router instance is exported. That means that in your app, you can always access your main router easily like this:

```javascript
var router = require('routers');

// For example, to redirect to a different screen
router.go('/somewhere/else');
```

The views directory is pretty simple. It contains a bunch of directories, one for each independent component. Each of those directories contains an `index.js` file, which is the controller. Then, there is the view file, the template, and the css.

The `i18n` directory contains all of your internationalization files. Your translation files and any setup. There is the main `i18n/index.js` which loads in all of the translation files and initializes the module. It should look something like this:

###### src/i18n/index.js

```javascript
var i18n = require('cloak.i18n');

i18n.init({
    'en-us': require('./en-us')
});
```

Then, there are the individual translation files, which simply contain phrases, like this:

###### src/i18n/en-us/index.js

```javascript
module.exports = {
    welcome: 'Welcome, {0}!',
    bad_creds: 'The username or password you entered was incorrect; please try again'
};
```







