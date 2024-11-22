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

        console.log(insertNodeRecursive(currentNode, newNode));

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

    preOrder(callback) {

    }

    postOrder(callback) {

    }


    sortArray(arr) {
        return Array.from(new Set(arr)).sort((a, b) => a - b);
    }
}







let binaryTree = new Tree([1, 2, 3, 4, 5, 6, 7]);








binaryTree.rebalanace();
binaryTree.prettyPrint();

binaryTree.inOrder()


































