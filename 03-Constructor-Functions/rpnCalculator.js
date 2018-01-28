RPNCalculator.prototype = {
    push: function(num){
          this.stackArr.push(num);
      },
  
      plus: function(){
          if(this.stackArr.length < 2) {
              throw 'rpnCalculatorInstance is empty';
            }
  
          this.stackArr.push(this.stackArr.pop() + this.stackArr.pop());
      },
  
      minus: function(){
          if(this.stackArr.length < 2) {
              throw 'rpnCalculatorInstance is empty';
            }
  
          this.stackArr.push(-this.stackArr.pop() + this.stackArr.pop());
      },
  
      divide: function(){
          if(this.stackArr.length < 2) {
              throw 'rpnCalculatorInstance is empty';
            }
  
          this.stackArr.push((1/this.stackArr.pop() * this.stackArr.pop()));
      },
  
    times: function(){
          if(this.stackArr.length < 2) {
              throw 'rpnCalculatorInstance is empty';
            }
  
          this.stackArr.push(this.stackArr.pop() * this.stackArr.pop());
      },
  
      value: function(){
        return this.stackArr[this.stackArr.length - 1];
      }
  }
  
  function RPNCalculator(){
      this.result = 0;
      this.stackArr = [];
  }