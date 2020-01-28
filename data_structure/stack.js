function Stack() {

  let stack = [];
  this.item = stack;

  this.pop = function() {
    this.item.pop();
  };
  this.push = function(element) {
    this.item.push(element);
  };
  this.peek = function() {
    return this.item[this.item.length - 1];
  };
  this.isEmpty = function() {
    return this.item.length === 0;
  };
  this.clear = function() {
    this.item = [];
  };
  this.print = function() {
    console.log(this.item.toString());
  };
};
