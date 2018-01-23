function setPropsOnObj(object){
    object.x = 7;
    object.y = 8;
    object.onePlus = function(num){
        num++;
        return num;
    }
}

function setPropsOnArr(arrayObject){
    arrayObject.hello = function(){
        return 'Hello!';
    }
    arrayObject.full = 'stack';
    arrayObject[0] = 5;
    arrayObject.twoTimes = function(num){
        return num * 2;
    }
}

function setPropsOnFunc(functionObject){
   functionObject.year  = '20??';
   functionObject.divideByTwo = function(num){
        return num/2;   
   }   
   functionObject.prototype.helloWorld = function(){
       return 'Hello World';
   }
}
