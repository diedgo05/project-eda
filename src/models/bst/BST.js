import Node from "./Node.js"

class BST {
    #root
    constructor(){
        this.#root = null
    }

    add(value) {
        if (this.#root == null){
            this.#root = new Node(value)
            if (this.#root != null) return true
        }
        else
        return this.insertNode(this.#root, value)
    }

    insertNode(node, value){
        if (value.ID < node.value.ID){
            if (node.left == null){
                node.left = new Node(value)
                if (node.left != null) 
                    return true; 
            }
            else{
                return this.insertNode(node.left, value); 
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value)
                if (node.right != null) return true
            }
            else {
                return this.insertNode(node.right, value);
             }
        }
    }

        search(nombre) {
        return this.searchNode(this.#root, nombre);
    }


    searchNode(node,nombre){
        if(node == null || node.value.nombre == nombre){
            return node;
        }
        else if(nombre < node.value.nombre){
            return this.searchNode(node.left, nombre);
        }
        else
        {
            return this.searchNode(node.right, nombre);
        }
    }




        min (){
            return this.minNode(this.#root)
        }

        minNode(node) {
            if (node==null || node.left==null) {
                return node;
            }
            else
            {
            return this.minNode(node.left);
        }
        }


        max () {
            return this.maxNode(this.#root);
        }
        maxNode (node) {
            if (node == null || node.right == null) {
                return node;
            }
            else 
            {
            return this.maxNode(node.right);
            } 
        }

        recorrido(callback) {
            return this.recorridoOrden(this.#root, callback);
        }

        recorridoFn (node, callback){
            if (node !== null){
                   this.recorridoFn (node.left, callback);
                   callback(node.value);
                   this.recorridoFn (node.right, callback);
                }
            }
}

export default BST