function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.find = find;
}

function find(data, node) {
  var current = node
  if (!(current === null)) {
      if (data < current.data) {
        find(data, current.left)
      }else if (data > current.data){
        find(data, current.right)
      }else{
        console.log('find it')
        return
      }
  }else {
    console.log('can not find it')
  }
  return
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    putstr(node.show() + " ");
    inOrder(node.right);
  }
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
    } else {
      var current = this.root;
      var parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current == null) {
            parent.right = n;
            break;
          }
        }
      }
  }
}
