function numberCheck(number)
{
   
   if (number>0) {
    return "The number is positive";
    
   } 
   else if(number<0)
   {
   return "The number is negative";
   }   
   else if(number==0)
    {
    return "The number is zero";
       }       
}
let num = 0
let result = numberCheck(num)
console.log(result);

