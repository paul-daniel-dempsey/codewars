export function duplicateEncode(word: string){
//   //console.log(word.replace(/[a-zA-Z0-9]/g, "("))
//   //console.log(word.replace(/[^a-zA-Z ]/g,""))
//   //return word.replace(/[a-zA-Z0-9]/g, '(');
    return word
    .toUpperCase()
    .split('')
    .map(letter => (word.toUpperCase().split('').filter(item => item === letter).length > 1) ? ')': '(')
    .join('');
}


export function duplicateEncode2(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

module.exports = {
    duplicateEncode,duplicateEncode2
};