const num=[1,2,3,4,5,6,7,8,9,10];
const multipleof2=num.map((n)=>{return n*2});
console.log(multipleof2);

const divisibleby2=num.map((n)=>{return n%2==0});
console.log(divisibleby2);

const sumofnumarray=num.reduce((acc,val)=> acc+=val,0);
console.log(sumofnumarray);
