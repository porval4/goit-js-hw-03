function slugify(title) {
    // Перетворення рядка до нижнього регістру та розділення слова тире
    const words = title.toLowerCase().split(' ');

    // Збірка slug з розділених тире слів
    const slug = words.join('-');

    return slug;
}

// Перевірка роботи функції з різними вхідними параметрами
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developers")); // "english-for-developers"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
