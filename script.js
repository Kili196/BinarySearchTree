class Node {
    constructor(data = null) {
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
        let arrayMid = Math.floor((values.length) / 2);
        let root = new Node(values[arrayMid]);

        if (values.length == 1) {
            return new Node(values[0]);
        }

        let leftArray = values.slice(0, arrayMid);
        let rightArray = values.slice(arrayMid + 1, values.length);

        root.left = this.buildTree(leftArray);
        root.right = this.buildTree(rightArray)



        return root;
    }



    sortArray(arr) {
        return Array.from(new Set(arr)).sort((a, b) => a - b);
    }
}


let binaryTree = new Tree([1, 3, 4, 6, 7, 2, 5, 4, 4, 4,]);

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};



prettyPrint(binaryTree.root);










