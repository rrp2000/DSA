class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {

        this.firstNode = null
        this.lastNode = null
    }

    insertInFront(data) {
        const node = new Node(data)

        if (!this.firstNode) {
            this.firstNode = node
        }
        else {
            let temp = this.firstNode
            this.firstNode = node
            node.next = temp
        }
    }

    insertInLast(data) {
        const node = new Node(data)
        if(!this.firstNode){
            this.firstNode = node
        }
        else{
            let temp = this.lastNode
            
        }
    }

    printList(){
        let curr = this.firstNode
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
        // console.log(this.firstNode);

    }
}

let list = new LinkedList()
list.insertInFront(35)
list.insertInFront(34)
list.insertInFront(33)
list.printList()