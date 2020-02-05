const Dictionary = function() {
  let items = {}; // 객체 생성

  this.has = function(key) {
    // 요소가 있는지 검사
    return items.hasOwnProperty(key);
  };

  this.set = function(key, value) {
    // 요소 추가
    if (!this.has(key)) {
      // 요소가 없다면
      items[key] = value;
      return true;
    }
    return false;
  };

  this.remove = function(key) {
    // 요소 삭제
    if (this.has(key)) {
      // 요소가 있다면
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function(key) {
    // 키에 해당하는 요소 값을 반환
    return this.has(key) ? items[key] : undefined; // 키가 존재한다면 value, 없다면 undefined
  };

  this.clear = function() {
    // 전체 삭제
    items = {};
  };

  this.size = function() {
    // 사이즈 반환
    return Object.keys(items).length;
  };

  this.keys = function() {
    // 키 값을 배열로 반환
    return Object.keys(items);
  };

  this.values = function() {
    // value 값을 배열로 반환
    return Object.values(items);
  };

  this.getitems = function() {
    return items;
  };
};
