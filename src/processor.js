import fs from "node:fs"
import { basename } from "node:path";
import Minifier from "./minifier.js";
export default class Processor {
  static generateMinifiedFilePath(filename){
    return filename.replace('.js','.min.js');
  }
  static #generateMinifiedCode ({originalCode,minifiedFilePath,minifiedLocalFilePath}){
     const minifier = new Minifier();
     minifier.minifyCodeAndReturnMapNames(originalCode);
  }
   static run(filename){
      const originalCode = fs.readFileSync(filename,'utf-8');
      const minifiedFilePath = this.generateMinifiedFilePath(filename); // public/index.min.js
      const minifiedLocalFilePath = basename(minifiedFilePath); // index.min.js
      this.#generateMinifiedCode({
        originalCode,
        minifiedFilePath,
        minifiedLocalFilePath
      });
      console.log(`Minified code and source map generated with success! ${filename}`)
   }
}