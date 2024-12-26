// hello, this is to check wheter or not the input string of brackets is valid.
// '()', '[]', '{}'

const isBracketValid = (stringOfBrackets) => {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let individualBracket of stringOfBrackets) {
        //check if individual bracket is a closing tag
        if( individualBracket in map){
            // we check if stack is empty and if the last element in stack corresponds to the key in in the map.
            if (stack.length > 0 && stack[stack.length - 1] === map[individualBracket]) {
                //if it is we pop it out
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(individualBracket)
        };
    }
    return stack.length === 0 ;
}

console.log(isBracketValid('[]')); // true

// Test Cases
console.log(isBracketValid("()")); // true
console.log(isBracketValid("()[]{}")); // true
console.log(isBracketValid("(]")); // false
console.log(isBracketValid("([)]")); // false
console.log(isBracketValid("{[]}")); // true