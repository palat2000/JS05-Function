function printPrime (num) {
    for(i=0;i<=num;i++){
        for(j=2;j<=num;j++){
            if(i%j==0 && i != j) break;
            else if (i%j==0 && i==j) console.log(i);
        }
    }
}

printPrime(100);