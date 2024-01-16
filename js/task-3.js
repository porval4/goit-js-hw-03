function filterArray(numbers, value) {
    // Порожній масив для зберігання підходящих чисел
    const filteredArray = [];

    // Цикл для ітерації кожного елемента масиву numbers
    for (let i = 0; i < numbers.length; i++) {
        // Умовний оператор для перевірки та додавання чисел у фільтрований масив
        if (numbers[i] > value) {
            filteredArray.push(numbers[i]);
        }
    }

    // Повертаємо новий масив з підходящими числами
    return filteredArray;
}

// Перевірка роботи функції з різними вхідними параметрами
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
