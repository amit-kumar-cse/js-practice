import {LinkedList} from "./linked-list";

const linkedList = new LinkedList<number>(0);

for(let i=1; i <= 10; i++) {
    linkedList.addDataOnTail(i);
}

linkedList.printLinedList();

