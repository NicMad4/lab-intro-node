class SortedList {
  constructor() {
    this.items=[]
    this.length=this.items.length;
  }
  
  add(item) {
    this.items.push(item)
    this.items.sort((a, b)=> a-b);
    this.length=this.items.length;
  }

  get(pos) {
    if (pos > this.items.length-1) throw new Error('OutOfBounds');
    else return this.items[pos]
   
  }

  max() {
    if(this.items.length===0) throw new Error('OutOfBounds');
    else return Math.max(...this.items)
    
  }

  min() {
    if(this.items.length===0) throw new Error('OutOfBounds');
    else return Math.min(...this.items)
  }

  sum() {
    let result=0
    for(let i=0;i<this.items.length;i++){
       result+=this.items[i]
    }
    return result
  }

  avg() {
    let resultado=0
    for(let i=0;i<this.items.length;i++){
       result+=this.items[i]/this.items.length
    }
    return resultado
  }
}

module.exports = SortedList;
