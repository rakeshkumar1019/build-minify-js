import fs from "node:fs"
import chalk from "chalk"
import { basename } from "node:path";
import Minifier from "./minifier.js";
import SourceMapper from "./sourcemapper.js";
export default class Processor {
  static generateMinifiedFilePath(filename){
    return filename.replace('.js','.min.js');
  }
  static #generateMinifiedCode ({originalCode,minifiedFilePath,minifiedLocalFilePath}){
     const minifier = new Minifier();
    const {minifiedCode, nameMap} = minifier.minifyCodeAndReturnMapNames(originalCode);
    const sourceMapURL= `//# sourceMappingURL=${minifiedLocalFilePath}.map`; 
    fs.writeFileSync(minifiedFilePath,`${minifiedCode}\n${sourceMapURL}`); 
    return{
      minifiedCode,
      nameMap
    }
  }
  static #generateSourceMap({originalCode, minifiedCode, nameMap, minifiedLocalFilePath,minifiedFilePath}){
    const sourceMapper = new SourceMapper({minifiedLocalFilePath});
    const sourceMapsContent = sourceMapper.generateSourceMap({
      originalCode,
      minifiedCode,
      nameMap
    });
    const sourceMapFilePath = `${minifiedFilePath}.map`;
    fs.writeFileSync(sourceMapFilePath,sourceMapsContent);
  }
   static run(filename){
      const originalCode = fs.readFileSync(filename,'utf-8');
      const minifiedFilePath = this.generateMinifiedFilePath(filename); // public/index.min.js
      const minifiedLocalFilePath = basename(minifiedFilePath); // index.min.js
      const {minifiedCode,nameMap} =  this.#generateMinifiedCode({
        originalCode,
        minifiedFilePath,
        minifiedLocalFilePath
      });
      this.#generateSourceMap({
        originalCode,
        minifiedCode,
        nameMap,
        minifiedFilePath,
        minifiedLocalFilePath
      })
      console.log(chalk.whiteBright.bgGreen.bold(` minified code and source-map generated with success! `))
      console.log(chalk.greenBright(` minified code at :${filename.replace('.js','.min.js')} `))
      console.log(chalk.greenBright(` source-map code at :${filename.replace('.js','.min.js.map')} `))
   }
}