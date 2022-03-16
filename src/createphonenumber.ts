export function createPhoneNumber(numbers : number[]){
  
    let prefix : string = '';
    let mid : string = '';
    let suffix : string = '';
    numbers.forEach((num,index) => {
        (index <= 2 ? prefix += num.toString() : ((index > 2 && index < 6) ? mid += num.toString() : suffix += num.toString()))
    });
    return `(${prefix}) ${mid}-${suffix}`
  }

  export function createPhoneNumber1(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  export function createPhoneNumber2(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }

  export function createPhoneNumber3(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

module.exports = {
    createPhoneNumber,
    createPhoneNumber1,
    createPhoneNumber2,
    createPhoneNumber3,
};
