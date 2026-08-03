function factorialCalc(n:number):number
{
    if(n<0)
    {
        throw new Error("Negative values cannot be accepted")
    }

    let result = 1

    for(let i=2;i<=n;i++)
    {
     result = result*i
    }

 return result
}
console.log(factorialCalc(3));
console.log(factorialCalc(5));
console.log(factorialCalc(7));
console.log(factorialCalc(4));


