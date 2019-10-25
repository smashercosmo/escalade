# Zygote Plugin Boilerplate
 


A boilerplate for creating custom plugins for [Zygote Cart](https://escaladesports.github.io/zygote-cart/)

---

## Setup a new project

```
git clone https://github.com/escaladesports/zygote-plugin-boilerplate.git <your_project_name>
cd <your_project_name>
```

Go to your `package.json` file and update your name to match your project name

```
"name": "<plugin-name>",
```
Then,
```
rm -rf .git
git init
yarn
yarn build
```
---

After you created and pushed to your remote repository, make sure to update the other properties in your `package.json`

```json
  "repository": {
    "type": "git",
    "url": "<your-repo-remote-url>"
  },
  "keywords": [
    "Zygote"
  ],
  "author": "<author-info>",
  "license": "MIT",
  "bugs": {
    "url": "<your-repo-remote-url-for-issues>"
  },
  "homepage": "<your-plugin-page-or-readme>",
  "dependencies": {
    "emotion": "^10.0.17",
    "react": "^16.10.2"
  },

```

---

## Running Locally (Linking the project)

From the root of your plugin project run:

`yarn link`

or

`npm link`

From the root of the project you will be running the plugin run:

`yarn link <plugin-name>`

or

`npm link <plugin-name>`

---

## Injecting the plugin

On the file for your Cart import the package

``` javascript
import * as <name-plugin> from "<plugin-name>"
```

and

```jsx
<Cart
    plugins={[<name-plugin>]}
/>
```

---

## Unlinking the project

From the root of your plugin project run:

`yarn unlink`

or

`npm unlink`

From the root of the project you will be running the plugin run:

`yarn unlink <plugin-name>`

or

`npm unlink <plugin-name>`


For more details visit: [npm-link docs](https://docs.npmjs.com/cli/link.html)

---
## What's in the box :package:

The plugin comes with some examples of: 

- two hooks  (`preOrder` and `postOrder`)
- one component (`Info`)

Feel free to add/remove more hooks and components as you need.

To view what components and hooks visit: [Zygote Cart- Plugin API](https://escaladesports.github.io/zygote-cart/#plugin-api)

---

## Publishing your package

Everytime you publish your package, you will need to update(up) your package version.

There are two ways to do that:

1. You can do so by updating the version directly on your `package.json` file, then running:
```
npm publish
```

2. From the command line:
```
npm version <version>
npm publish
```
Public Org scoped packages (@escaladesports.com\<plugin-name>) are published with 
```
npm publish --access public
````

For additional info on npm packages:


- [npm - Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [npm-version](https://docs.npmjs.com/cli/version)
