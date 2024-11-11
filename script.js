class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }
}

class Tree {
    constructor(values) {
        this.value = values;
        this.root = buildTree(values);
    }


    buildTree(treeValues) {
        const sortedTreeValues = this.sortArray(treeValues);
    }


    sortArray(arr) {
        return Array.from(new Set(arr)).sort((a, b) => a - b);
    }
}




