const multiples = (numbers) => {
    const total = numbers
        .filter(num => num % 3 === 0 || num % 5 === 0)
        .reduce((acc, curr) => curr + acc)
    return total;
}

console.log(multiples([1, 2, 3, 4, 5, 6, 7, 8, 9]))