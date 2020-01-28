function Queue() {

    const item = [];
    this.queue = item;

    this.enqueue = function(element) {
        this.queue.push(element);
    }
    this.dequeue = function() {
        return this.queue.shift();
    }
    this.front = function() {
        return this.queue[0];
    }
    this.isEmpty = function() {
        return this.queue.length === 0;
    }
    this.size = function() {
        return this.queue.length;
    }
    this.print = function() {
        console.log(this.queue.toString());
    }

}