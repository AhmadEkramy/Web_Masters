function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
let numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers)); // 5
