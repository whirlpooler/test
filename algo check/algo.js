
const str = 'hello maria,nice to meet you.';
const countSecondLast = (str = '') => {
   const strArr = str.split(' ');
   const { length: len } = strArr;
   if(len <= 2){
      return 0;
   };
   const el = strArr[len - 2];
   const { length } = el;
   return length;
};
console.log(countSecondLast(str));

const str = 'hello maria,nice to meet you.';
const isAlpha = char => {
   const legend = 'abcdefghijklmnopqrstuvwxyz';
   return legend.includes(char);
};
const countAlphabets = (str = '') => {
   let count = 0;
   for(let i = 0; i < str.length; i++){
      if(!isAlpha(str[i])){
         continue;
      };
      count++;
   };
   return count;
};

const str = 'hello maria,nice to meet you.';
const countAlpha = str => {
   return str.split('').reduce((acc, val) => {
      const legend = 'aeiou';
      let { vowels, consonants } = acc;
      if(val.toLowerCase() === val.toUpperCase()){
         return acc;
      };
      if(legend.includes(val.toLowerCase())){
         vowels++;
      }else{
         consonants++;
      };
      return { vowels, consonants };
   }, {
      vowels: 0,
      consonants: 0
   });
};
console.log(countAlpha(str));