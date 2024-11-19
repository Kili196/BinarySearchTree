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



    sortArray(arr) {
        return Array.from(new Set(arr)).sort((a, b) => a - b);
    }
}







let binaryTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
binaryTree.prettyPrint();
console.log(binaryTree.height(binaryTree.root));


















