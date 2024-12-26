const fizzBuzz = (n) => {
    let result = [];

    for ( let i = 0; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push('fizzBuzz');
        } else if ( i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    return result;

}

console.log(fizzBuzz(10));

/////////////////// or console log directly with no extra [] 

const fizzBuzz2 = (n) => {

    for ( let i = 0; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
           console.log('fizzBuzz');
        } else if ( i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(n);
        }
    }

}

fizzBuzz2(10);

