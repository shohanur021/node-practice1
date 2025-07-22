
const factorial = (num) => {
    if(num!=0){
        return num*num-1;
    }
}

const largeNum = (arr) => {
    return Math.max(...arr);
}

export {factorial, largeNum};