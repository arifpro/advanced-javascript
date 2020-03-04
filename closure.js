function stopWatch() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
// console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());


// ekta function theke arekta function ke jodi call kori ba return kori, tahole se ekta closed environment create kore.