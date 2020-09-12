import Stack from './stack';

let stack = new Stack<number>();

for(let i = 0; i < 20; i++) {
    stack.push(i);
}

while(!stack.isEmpty()) {
    console.log(stack.pop());
}
