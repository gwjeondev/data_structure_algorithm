function Queue() {

    const item = [];
    this.queue = item;

    function priority(element, pri) { // 우선순위 생성자 함수
        this.element = element;
        this.pri = pri;
    }

    this.enqueue = function(element, pri) {
        const priority_queue = new priority(element, pri); // 우선순위 객체 생성
        let add = false;
        
        for(let i=0;i<this.queue.length;i++) {
            if(priority_queue.pri < this.queue[i].pri) { // 우선순위 비교
                this.queue.splice(i,0,priority_queue); // i 인덱스 요소에 삽입
                add = true;
                break;
            }
        }
        
        if(!add) { // 우선순위가 최 하위 경우
            this.queue.push(priority_queue); 
        }
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

const a = new Queue();

a.enqueue('won',3);
a.enqueue('geun',2);
a.enqueue('jeon',1);

console.log(a);