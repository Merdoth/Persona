//First instance
const word = ""
const isPalindrome = (word) => {
        if(word) {
          let pan = word.split('')

          console.log(pan);
        }
        return
 };

//Second instance
 function isPalindrome(words){
     return {
        const pan = words.split('');
        if(pan.reverse().join('') !== words){
            return false
        } else {
            return true
        }
    }

}

//Third instance
const word = ""
const isPalindrome = (word) => {
    let pan = word.split('');
    let lindrome = pan.reverse().join('');
        if(word !== lindrome) {
           return false;
        } else {
           return true
        }
 };
