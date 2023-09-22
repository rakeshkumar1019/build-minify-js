export default class ASTHelper {
    #variableDeclarationHook = ()=>{};
    #functionDeclarationHook = ()=>{}
    #identifierHook = ()=>{}
    //FunctionDeclaration
    //Identifier
    //VariableDeclaration
    setVariableDeclarationHook(fn){
        this.#variableDeclarationHook =fn;
        return this;
    }
    setFunctionDeclarationHook (fn){
        this.#functionDeclarationHook =fn;
        return this;
    }
    setIdentifierHook (fn){
        this.#identifierHook = fn;
        return this;
    }
    traverse(node){
        const handlers = {
            FunctionDeclaration: this.#functionDeclarationHook,
            Identifier: this.#identifierHook,
            // where the reference is being used
            VariableDeclaration: this.#variableDeclarationHook
        }
        //node { "type": "FunctionDeclaration",...}
        handlers[node?.type]?.(node);
        for(const key in node){
            if(typeof node[key]!== 'object') continue;
            this.traverse(node[key]);
        }
    }
}