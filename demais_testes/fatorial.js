const getFactorial = (factorial) => {
    let result = factorial;
    if (factorial === 0) {
        result = 1
    }
    else {
        for (let i = 1; i < factorial; i++) {
            result *= i;
        }
    }
    return result
}

console.log(getFactorial(0))
console.log(getFactorial(1))
console.log(getFactorial(2))
console.log(getFactorial(3))
console.log(getFactorial(4))
console.log(getFactorial(5))
console.log(getFactorial(6))