function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// مثال على الاستخدام
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
