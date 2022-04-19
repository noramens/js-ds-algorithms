class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const list = [];
    let currentItem = this.head;

    while (currentItem !== null) {
      list.push(currentItem.value);
      currentItem = currentItem.next;
    }
    return list;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = {
      value: value,
      next: null
    };
    const indexBefore = this.traverseToIndex(index - 1);
    const indexAfter = this.traverseToIndex(index);
    indexBefore.next = newNode;
    newNode.next = indexAfter;
    this.length++;
    this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.printList();
myLinkedList.insert(1, 99);
myLinkedList.insert(8, 234);
