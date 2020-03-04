let bonus = 20; //global
// kono ekta jinish declare korar por oytake or uporer level a niye jawatake hoisting

//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
function sum(first, second) {
    let result = first + second + bonus;
    // console.log(bonus);
    if(result>9){
        let mood = "happy";
        mood = "fishy";
        mood = "funky";
        // console.log(mood);
    }
    // console.log(mood);

    console.log(day);
    var day = "friday";
    // let day = "friday";
    // console.log(day);
    return result;
}

const output = sum(3,7);
// console.log(bonus);
// console.log(output);



