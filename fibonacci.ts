function fibonacciSeries(n:number):number
{  
    let currentValue = 0
    let prev1 = 1
    let prev2 = 0
   
for(let i=2; i<=n; i++)
{   
    currentValue = prev1+prev2
    prev2 = prev1
    prev1 = currentValue
}
return currentValue;
}
console.log(fibonacciSeries(5)); 
console.log(fibonacciSeries(10)); 
console.log(fibonacciSeries(50)); 
