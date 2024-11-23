class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;


    }
}

class Tree {
    constructor(values) {
        this.values = values;
        this.root = this.buildTree(this.sortArray(values));
    }

    buildTree(values) {

        if (values.length == 0) {
            return null;
        }

        else if (values.length == 1) {
            return new Node(values[0]);
        }

        let arrayMid = Math.floor((values.length) / 2);


        let root = new Node(values[arrayMid]);

        let leftArray = values.slice(0, arrayMid);
        let rightArray = values.slice(arrayMid + 1, values.length);

        root.left = this.buildTree(leftArray);
        root.right = this.buildTree(rightArray)



        return root;
    }



    prettyPrint = (node = binaryTree.root, prefix = "", isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {

            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };




    /**
     *  Height is defined as the number of edges in the longest path from a given node to a leaf node.
     *  @return given node heigh
     */

    height(node) {
        let leftHeight = 0;
        let rightHeight = 0;

        if (node.left == null && node.right == null) {
            return 1;
        }

        if (node.left != null) {
            leftHeight += this.height(node.left);
        }

        if (node.right != null) {
            rightHeight += this.height(node.right);
        }

        return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1
    }


    /**
     * 
     Write an isBalanced function that checks if the tree is balanced
     A balanced tree is one where the difference between heights of the left 
     subtree and the right subtree of every node is not more than 1.
     */

    isBalanced() {
        let heightOfTree = Math.abs(this.height(this.root.left) - this.height(this.root.right));


        if (heightOfTree > 1) {
            return false;
        }
        return true;
    }

    insert(value) {
        let newNode = new Node(value);
        let currentNode = this.root;

        function insertNodeRecursive(root, key) {


            if (root == null) {
                return key;
            }

            if (key.data > root.data) {
                root.right = insertNodeRecursive(root.right, key);
            }
            else if (key.data < root.data) {

                root.left = insertNodeRecursive(root.left, key);
            }

            return root;
        }

        insertNodeRecursive(currentNode, newNode);

    }

    deleteItem(value, node = this.root) {
        if (node == null) {
            return null;
        }

        if (value < node.data) {
            node.left = this.deleteItem(value, node.left);

        }
        else if (value > node.data) {
            node.right = this.deleteItem(value, node.right);
        }

        else {
            if (node.left == null) {
                return node.right;
            }
            else if (node.right == null) {
                return node.left;
            }



            let successorNode = this.findMin(node.right);
            console.log(successorNode);
            let temp = node.left;
            node = successorNode;
            node.left = temp;
        }

        return node;
    }



    findMin(node) {

        if (node.right == null || node.left == null) {
            return node;
        }

        if (node.right.data < node.data) {
            return node.right;
        }
        else if (node.left.data < node.data) {
            return node.left;
        }

        node = this.findMin(node)
        return node;
    }


    findMax(node = this.root) {

        if (node.right == null || node.left == null) {
            return node;
        }

        if (node.right.data > node.data) {
            return node.right;
        }
        else if (node.left.data > node.data) {
            return node.left;
        }
        node = this.finddMax(node)
        return node;
    }









    rebalanace() {
        let unsortedValuesOfTree = [];

        function getCurrentValue(currentNode) {
            unsortedValuesOfTree.push(currentNode.data);
        }

        this.levelOrder(getCurrentValue)
        this.root = this.buildTree(this.sortArray(unsortedValuesOfTree));

    }

    levelOrder(callback) {
        if (!typeof callback === "function") {
            throw new Error("Callback not a function");
        }

        let queue = [this.root];

        while (queue.length != 0) {
            let currentNode = queue.shift();
            if (currentNode.left != null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right != null) {
                queue.push(currentNode.right);
            }
            callback(currentNode);
        }
    }

    /**
     * 
     *  Traverse the left subtree, i.e., call Inorder(left->subtree) 
        Visit the root. 
        Traverse the right subtree, i.e., call Inorder(right->subtree) } callback 
     */

    inOrder(callback, node = this.root) {

        if (!typeof callback === "function") {
            throw new Error("Callback not a function");
        }

        if (node == null) {
            return;
        }


        this.inOrder(callback, node.left);

        callback(node);

        this.inOrder(callback, node.right);


    }

    /**
     * 
     * In preorder traversal, first, 
     * root node is visited, then left sub-tree and after that right sub-tree is visited. 
     * The process of preorder traversal can be represented as -
     */

    preOrder(callback, node = this.root) {

        if (!typeof callback === "function") {
            throw new Error("Callback not a function");
        }

        if (node == null) {
            return
        }

        callback(node);
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right);

    }

    /**
     * The post order traversal technique follows the Left Right Root policy.
     * Here, Left Right Root means the left subtree of the root node is traversed first, 
     * then the right subtree, and finally, the root node is traversed.
     */

    postOrder(callback, node = this.root) {

        if (!typeof callback === "function") {
            throw new Error("Callback not a function");
        }

        if (node == null) {
            return
        }

        this.postOrder(callback, node.left);
        this.postOrder(callback, node.right);

    }


    sortArray(arr) {
        return Array.from(new Set(arr)).sort((a, b) => a - b);
    }
}







let binaryTree = new Tree([10, 20, 30, 50, 60, 13, 11]);









binaryTree.prettyPrint();
console.log("---------")



binaryTree.deleteItem(20);
binaryTree.prettyPrint();




















































