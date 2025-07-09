function palindrome(str){
   str = str.toLowerCase();

   let store = "";

   for(let i = str.length-1; i >=0; i--){
    store += str[i];
   }

   return store === str;

}

console.log(palindrome("level"));
console.log(palindrome("hello"));

// madam -  m a d a m 
// m a d a m 