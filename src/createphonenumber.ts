export function createPhoneNumber(numbers : number[]){
  
    let prefix : string = '';
    let mid : string = '';
    let suffix : string = '';
    numbers.forEach((num,index) => {
        (index <= 2 ? prefix += num.toString() : ((index > 2 && index < 6) ? mid += num.toString() : suffix += num.toString()))
    });
    return `(${prefix}) ${mid}-${suffix}`
  }

module.exports = {
    createPhoneNumber
};
