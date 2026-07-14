
function lastWordLength()
{
let s = "Hello World"
let r = ""
console.log(r = s.split(" "));
console.log("The Last word - World length is: ", r[1].length);
}

function findLastWordLength()
{
let s = " fly me to the moon "
let r = ""
console.log(r = s.trim().split(" "));
return r[r.length-1].length;
}
let result = findLastWordLength();
console.log("The Last word - moon length is:", result);

lastWordLength()
