module.exports = function toReadable (number) {
    
        let arrFirst = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
        let arrSecond = ['zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        
        let str ='';
        number = '' + number;
        if (number >= 0 & number < 20) {
          return str = arrFirst[number];
        }
      
        if(number >= 20 & number < 100){
          if (number[1] == 0){      
            return str = arrSecond[number[0]];
          } else {
            return str = arrSecond[number[0]] + ' ' + arrFirst[number[1]];
          }
        }
      
        if(number >= 100 & number < 1000){    
          if (number[1] == 0 & number[2] == 0){
            return str = arrFirst[number[0]] + ' hundred';
          } 
          if (number[1] == 0 & number[2] != 0){
            return str = arrFirst[number[0]] + ' hundred' + ' ' + arrFirst[number[2]];
          }
          if (number[1] != 0 & number[2] == 0){
            return str = arrFirst[number[0]] + ' hundred' + ' ' + arrSecond[number[1]];
          }
          if (number[1] != 0 & number[2] != 0){      
              if (number.slice(1) > 10 & number.slice(1) <20){
              return str = arrFirst[number[0]] + ' hundred' + ' ' + arrFirst[number.slice(1)];
            } else {
              return str = arrFirst[number[0]] + ' hundred' + ' ' + arrSecond[number[1]] + ' ' + arrFirst[number[2]];
            }
          }
        }
}
