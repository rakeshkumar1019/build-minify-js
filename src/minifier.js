import * as acorn from "acorn" //generate AST
import escodegen from "escodegen"; //validates JS code , removes comments & line breaks

export default class Minifier {
   minifyCodeAndReturnMapNames(originalCode){
     const originalAST = acorn.parse(originalCode,{
        ecmaVersion:2022,
        locations:true
     }) 
     console.log(JSON.stringify(originalAST,null,2))
   }
}