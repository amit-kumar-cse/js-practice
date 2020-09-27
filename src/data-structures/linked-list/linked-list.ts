export class LinkedList<T> {
    private data: T;
    next: LinkedList<T>|null;

    constructor(data: T, next: LinkedList<T>|null = null) {
        this.data = data;
        this.next = next;
    }

    addDataOnTail(data: T) {
        const newNode: LinkedList<T>|null = new LinkedList<T>(data);

        let lastNodeFinder: LinkedList<T>|null = this;
        while(lastNodeFinder.next !== null) {
            lastNodeFinder = lastNodeFinder.next;
        }

        lastNodeFinder.next = newNode;
    }

    printLinedList = () => {
        let iteratorNode: LinkedList<T>|null = this;
        while(iteratorNode.next) {
            console.log(iteratorNode.data);
            iteratorNode = iteratorNode?.next;
        }
        console.log(iteratorNode.data);
    }
}
