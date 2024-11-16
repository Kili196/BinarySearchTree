class Node {
    constructor(data = null) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;


    }
}

class Tree {
    constructor(values) {
        this.values = values;
        this.root = this.buildTree(values);
    }

    buildTree() {
        const sortedValues = this.sortArray(this.values);
        let root = new Node();
        sortedValues.forEach((value) => {
            let treeNode = new Node(value);

        })

        return root;

    }



    sortArray(arr) {
        return Array.from(new Set(arr)).sort((a, b) => a - b);
    }
}


let binaryTree = new Tree([1, 3, 4, 6, 7, 2, 5, 4, 4, 4,]);


console.log(binaryTree);










