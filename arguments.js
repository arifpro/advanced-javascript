// arguments means array like object

function add(num1, num2) {
    // console.log([...arguments]);
    const array = [...arguments];
    total=0;
    // return num1+num2 + arguments[2];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        total+=element;
    }
    return total;
}

const result = add(2, 3, 5, 7);
console.log(result);