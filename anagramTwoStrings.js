function anagram(s,r){
let k = ""
let p = ""
console.log( k = s.trim().split("").sort().join());
console.log( p = r.trim().split("").sort().join());

if (k===p) {
    return true;
    
} else {
    return false;    
}
}

let result = anagram("listen","silent")
console.log(" isAnagram(s,k) is ",result);

let result1 = anagram("hello","world")
console.log(" isAnagram(s,k) is ",result1);
