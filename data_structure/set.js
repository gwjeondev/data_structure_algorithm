// Set 메서드 구현

const Set = function() {
  let items = {};

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  this.clear = function() {
      items = {};
  }

  this.size = function() {
      return Object.keys(items).length;
  }

  this.values = function() {
      return Object.keys(items);
  }
  
  this.union = function(otherSet) { // 합집합
    const unionSet = new Set();

    let values = this.values();
    for(index in values) {
        unionSet.add(values[index]);
    }
    values = otherSet.values();
    for(index in values) {
        unionSet.add(values[index]);
    }
    return unionSet;
  }

  this.intsec = function(otherSet) { // 교집합
    const intsecSet = new Set();

    let values = this.values();
      for(index in values) {
          if(otherSet.has(values[index])) {
            intsecSet.add(values[index]);
          }
      }
      return intsecSet;
}
  this.diff = function(otherSet) { // 차집합
      const diffSet = new Set();

      let values = this.values();
        for(index in values) {
            if(!otherSet.has(values[index])) {
                diffSet.add(values[index]);
            }
        }
        return diffSet;
  }

  this.subset = function(otherSet) { // 부분집합
    const subsetSet = new Set();

    let values = otherSet.values();

    for(index in values) {
        if(!this.has(values[index])) {
            return false;
        }
    }
    return true;
  }
};
