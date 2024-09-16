const calFactorial = num => {
    if(num==0) return 1;
    let sum = 1;
    for(num;num!=0;num--){
        sum *= num;
    }
    return sum;
}