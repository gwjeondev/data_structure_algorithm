function LinkedList() {
  let head = null;
  let length = 0;

  const Node = function(element) {
    this.element = element;
    this.nextList = null;
  };

  this.append = function(element) {
    // 추가
    let node = new Node(element);
    let current = null;

    if (!head) {
      head = node; // 리스트가 empty인 경우
    } else {
      current = head; // 현재 요소를 가르킬 current 변수에 head 저장
      while (current.nextList) {
        // 현재 요소의 다음 요소가 null이 아닐 때 까지 반복
        current = current.nextList; // 현재 요소가 다음 요소를 가르키게 함
      }
      current.nextList = node; // 위의 while문을 다돌고 나면 현재 요소는 마지막 요소가 되어있음. 다음 요소가 새로 추가한 요소를 가르키도록 함.
    }
    length++;
  };

  this.removeAt = function(position) {
    // 삭제
    if (position > -1 && position < length) {
      // 삭제 할 position 위치가 유효한 값 인지 검사
      let current = head;
      let index = 0;
      let previous = null;

      if (position === 0) {
        head = current.nextList; // 삭제 할 position 위치가 0 번째 일 경우 ...
      } else {
        while (index < position) {
          // index 0부터 삭제할 위치까지 반복
          previous = current; // 전 요소를 가르키는 변수 previous에 current 저장
          current = current.nextList; // current를 다음 요소를 가르키게 함.
          index++;
        }
        previous.nextList = current.nextList; // 전 요소의 nextList를 다음 요소의 nextList를 가르키게 한다.
      }
      length--;
    } else {
      return 0;
    }
  };

  this.insert = function(element, position) {
    // 삽입
    let node = new Node(element);
    let current = head;
    let previous = null;
    let index = 0;

    if (position > -1 && position <= length) {
      if (position === 0) {
        node.nextList = current;
        head = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.nextList;
          index++;
        }
        previous.nextList = node;
        node.nextList = current;
      }
      length++;
    } else {
      return 0;
    }
  };

  this.toString = function() {
    // 요소 문자열 반환
    let current = head;
    let result = "";

    while (current) {
      // current가 null이 될때까지 반복
      result += current.element;
      current = current.nextList;
    }
    return result;
  };

  this.indexOf = function(element) {
    // index 조회
    let current = head;
    let index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.nextList;
    }

    return -1;
  };

  this.remove = function(element) {
    // 요소명으로 삭제
    let index = this.indexOf(element);
    this.removeAt(index);
  };

  this.isEmpty = function() {
    // 비었는지 확인
    return length === 0;
  };

  this.size = function() {
    // 리스트 길이 확인
    return length;
  };

  this.getHead = function() {
    return head;
  };
}
