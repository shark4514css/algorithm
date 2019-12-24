function LinkedList() {
  let Node = function(element) {
    // 需要一个辅助类。表示要加入列表的项
    this.element = element;
    this.next = null;
  }
  let length = 0;
  let head = null; // 存储第一个节点的引用
  this.append = function(element) { // 向末尾添加一个新的项
    let node = new Node(element);
    let current;
    if (head == null) { // 当我们创建LinkedList的时候，列表为空。当head元素为null的时候，直接在列表中添加一个元素
      head = node; // head指向node,node中的next等于null，所以node会指向null
    } else {
      current = head;
      while(current.next) { // current.next == null的时候已经到了尾结点
        current = current.next; // 当前元素的next指针指向要添加到列表的节点
      }
      current.next = node;
    }
    length++;
  }
  this.insert = function(position, element) { // 插入一个项
    
  }
  this.removeAt = function(position) {
    // 处理越界值
    if (position > -1 && position < length) {
    }
    
  }
  this.remove = function(element) { //移除一项
    
  }
  this.indexOf = function(element) {
    
  }
  this.isEmpty = function() {
  
  }
  this.size = function() {
  
  }
  this.getHead = function() {
  
  }
  this.toString = function() {
  }
  this.print = function() {
  }
}
