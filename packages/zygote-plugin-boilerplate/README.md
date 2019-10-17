# Zygote Plugin Boilerplate



A quick boilerplate for [Zygote Cart](https://escaladesports.github.io/zygote-cart/)

---

## Setup a new project

```
git clone https://github.com/escaladesports/zygote-plugin-boilerplate.git <your_project_name>
cd <your_project_name>
rm -rf .git
git init
yarn
yarn build
yarn dev
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


For additional info on npm version:
[npm-version](https://docs.npmjs.com/cli/version)
