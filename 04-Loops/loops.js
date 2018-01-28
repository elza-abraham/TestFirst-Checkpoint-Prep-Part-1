// Let's repeat ourselves several times
function repeat(str, times){
    var returnStr = "";
    for(var i = 0; i < times; i++){
        returnStr+= str;
    }
    return returnStr;
}

// Let's iterate over all the elements of an array using a loop
function sum(sum){
    total = 0;
    for(var i = 0; i < sum  .length; i++){
        total+= sum[i];
    }
    return total;
}

function join(arr,delim=''){
    var str = "";
    for(var i = 0; i < arr.length; i++){
        str+=arr[i];
        if (typeof delim !== 'undefined' && i < arr.length - 1){
            str += delim;
        }
    }
    return str;
}

function gridGenerator(num){
    var str = "";
    for(var i = 0; i < num; i++){
       for(var j = 0; j < num; j++){
         if((i+j) % 2 === 0){
           str+= "#";
         } else {
           str+=" ";
         }
       }
       str+="\n";
    }
    return str;
  }

  function paramify(obj){
    var returnString = [];
    for(var key in obj){
      if (obj.hasOwnProperty(key)){
        returnString.push(key+"="+obj[key]);
      }
    }  
    return returnString.sort().join('&');
  }

  function paramifyObjectKeys(obj){
    var returnString = [];
    var keyArr =  Object.keys(obj);
    returnString = keyArr.map(function(key){
      return (key+"="+obj[key]);})
    return returnString.sort().join('&');
  }
  

  function renameFiles(fileNameArr){
    var resultArr = [];
    fileNameArr.forEach(function renamer(name){
      if(resultArr.indexOf(name) !== -1){
        var index = name.indexOf('(');
        if(index !== -1){
          var num = Number(name.match(/\d+/)[0]) +1;
          console.log(index);
          renamer(name.substring(0,index+1) + num + ")");
        } else {
          renamer(name + "(1)");
        }
      } else {
        resultArr.push(name);
      }
    });
    return resultArr;
  }
  