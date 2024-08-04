const numbers = [1, 2, 3, 4, 5]
numbers
    .map((item) => item * 2)
    .filter((item) => item > 5)
    .forEach((item) => {
        console.log(item)
    })
