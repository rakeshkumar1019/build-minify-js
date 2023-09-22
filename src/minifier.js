import * as acorn from "acorn" //generate AST
import escodegen from "escodegen"; //validates JS code , removes comments & line breaks

export default class Minifier {
    #nameMap= new Map()
    #alphabet = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    #generateNameIfNotExisting(name){
        if(this.#nameMap.has(name)){
            return this.#nameMap.get(name);
        }
        if(!this.#alphabet){
            throw new Error('No more names available - limit is 52 tokens');
        }
        return this.#alphabet.shift();;
    }
    #updateNameMap(oldName,newName,{loc:{start}}){
        if(this.#nameMap.has(oldName)){
            const nameMap = this.#nameMap.get(oldName);
            nameMap.postion.push(start);
            this.#nameMap.set(oldName,nameMap);
            return;
        }
        this.#nameMap.set(oldName,{newName,postion:[start]});
    }

    //declaration here means object's of AST
    #handleDeclaration(declaration){
        const oldName = declaration.name;
        const newName = this.#generateNameIfNotExisting(oldName);
        this.#updateNameMap(oldName,newName,declaration);
        declaration.name = newName;
    }

   minifyCodeAndReturnMapNames(originalCode){
     const originalAST = acorn.parse(originalCode,{
        ecmaVersion:2022,
        locations:true
     }) 
     this.#handleDeclaration(originalAST.body[0].id);
     console.log(JSON.stringify(originalAST,null,2))
     const minifiedCode = escodegen.generate(originalAST,{format:{compact:true}});

    }
}