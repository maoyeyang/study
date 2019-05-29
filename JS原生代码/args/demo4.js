const err = (message)=>{
    throw new Error(message)
};
function sum(a=err('Error1'),b=err('Error2')){
    return sum;
}
// console.log(sum(undefined,10))
// console.log(sum(10))
// console.log(sum())