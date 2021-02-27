/*Будь-яке натуральне число можна представити у вигляді суми не менше ніж 4-х квадратів натуральних чисел, 
або у вигляді 4-х квадратів позитивних чисел (теорема Лагранжа). Дано число n. Знайти такі позитивні x, y, z, t, до
яких справедливо зтвердження, що n = (x * x) + (y * y) + (z * z) + (t * t);*/

function squareFourNumbers(x, y, z, t) {
    return x * x + y * y + z * z + t * t;
}

function getFourIntsForNum(num) {
    let intSqrt = Math.floor(Math.sqrt(num));
    for (let x = 0; x <= intSqrt; x++) {
        for (let y = 0; y <= intSqrt; y++) {
            for (let z = 0; z <= intSqrt; z++) {
                for (let t = 0; t <= intSqrt; t++) {
                    if (squareFourNumbers(x, y, z, t) == num) {
                        console.log(x, y, z, t);
                        return;
                    }
                }
            }
        }
    }
}

getFourIntsForNum(30);