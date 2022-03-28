// Set up
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//       visualization
//         a
//       /   \
//     b      c
//   /   \     \
// d      e     f

const breadthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return values;
};

breadthFirstValues(a);

/////////// Practice1
// return true if a value exists in the tree
const breadthFirstSearch1 = (root, target) => {
  if (root === null) return false;

  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

////////practice 2
// return the sum of all values in a tree

const breadthFirstSearch2 = (root) => {
  if (root === null) return 0;
  let sum = 0;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
};
