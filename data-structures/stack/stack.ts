export default class Stack<T> {
    /** current stack size*/
    private stackSize: number;
    private stackArray: Array<T>;
    /** place where new data should be pushed*/
    private stackTop: number;

    constructor(stackSize: number = 10) {
        this.stackSize = stackSize;
        this.stackArray = new Array<T>(stackSize);
        this.stackTop = 0;
    }

    push(entry: T) {
        if(this.stackTop === this.stackSize) {
            this.doubleStackSize();
        }
        this.stackArray[this.stackTop++] = entry;
    }

    isEmpty(): boolean {
        return this.stackTop === 0 ? true : false;
    }

    pop(): T {
        if(this.isEmpty()) {
            throw new Error('Trying to fetch and empty stack');
        }
        return this.stackArray[--this.stackTop];
    }

    private doubleStackSize() {
        const newStackSize = this.stackSize*2;
        const newStack = new Array<T>(newStackSize);
        for(let i = 0; i < this.stackTop; i++) {
            newStack[i] = this.stackArray[i];
        }
        this.stackSize = newStackSize;
        this.stackArray = newStack;
    }
}
