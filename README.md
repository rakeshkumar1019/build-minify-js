# BuildJS
[![npm version](https://badge.fury.io/js/buildjs.svg)](https://badge.fury.io/js/buildjs)

BuildJS is a JavaScript build tool designed to compress JavaScript code. 

## What it does ?
- **Replaces Variable Names**: 
BuildJS optimizes your code by replacing lengthy variable names with shortened, efficient alternatives.
- **Removes Unnecessary Elements**: 
It eliminates spaces, comments, and line breaks from your JavaScript code, resulting in a more compact and efficient script.
- **Minifies Code**:
Reduces the size of your JavaScript code by eliminating unnecessary characters and whitespace while preserving its functionality. This makes your code more efficient and improves load times for your web applications.
- **Generates Source Maps**:
The tool creates source maps that facilitate easy debugging, allowing you to trace and fix issues in your original code.

## Installation

First make sure you have installed the latest version of node.js (You may need to restart your computer after this step).

You can install BuildJS globally using npm:

```bash
npm install -g buildjs
```
Alternatively, you can include it as a development dependency in your project:

```bash
npm install --save-dev buildjs
```
## Usage
To use BuildJS, follow the instructions below in your terminal. You can minify a single JavaScript file using the following command:

```
node src/index.js <file-path>.js
```

Replace `<file-path>.js` with the actual file path of the JavaScript file you want to minify. This command will process the specified file and generate a minified version.

#### Example: 
Lets build the below javascript code.

```javascript
function sum(var1, var2) {
    return var1 + var2
}
sum(10,26)
```
When you run this commad. 
```
node src/index.js path/to/your/script.js
```
This will minify `script.js` and create a minified & source-map files  as `script.min.js` & `script.min.js.map` in the same directory.

`script.min.js`
```
function a(b,c){return b+c;}a(10,26);
//# sourceMappingURL=script.min.js.map
```
`script.min.js.map`
```
{"version":3,"sources":["index.min.js"],"names":["a","b","c"],"mappings":"SAASA,EAAIC,EAAMC,UACRD,EAAOC,GAElBF","file":"index.min.js","sourcesContent":["function sum(var1, var2) {\n    return var1 + var2\n}\nsum(10,26)\n"]}
```





## Available Scripts
- `list`: To list all the available commands.

```bash
npm run list
```
- `clean`: To delete all the `*.min.js` and `*.min.js.map` files.
```
npm run clean
```
- `minify`: To generate minified code and source maps.
```
npm run minify
```
- `minify-and-run`: To execute the minification above `minify` command and execute the minified `*.min.js` file.
```
npm run minify-and-run
```
-`start`: To run the minified `*.min.js` file.
```
npm start
```

## Contributing
Contributions are welcome! If you'd like to contribute to BuildJS, please check out our contributing guidelines.

## Acknowledgments
- BuildJS relies on the [Acorn](https://www.npmjs.com/package/acorn) parser to parse javascript code to AST.
- [escodegen](https://www.npmjs.com/package/escodegen) to generated AST back to javascript code.
- Source maps are generated using [source-map](https://www.npmjs.com/package/source-map).

## Author
Rakesh Kumar Singh

GitHub: https://github.com/rakeshkumar1019