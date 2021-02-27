//Є натуральне число. Потрібно написати функцію, яка поміняє місцями першу і останню цифру цього числа


const swapFirstAndLastDigits = (num) => {
    const arrayOfDigits = Array.from(String(num), Number);
    let temp = arrayOfDigits[0];
    arrayOfDigits[0] = arrayOfDigits[arrayOfDigits.length - 1];
    arrayOfDigits[arrayOfDigits.length - 1] = temp;

    console.log(Number(arrayOfDigits.join("")));
};


swapFirstAndLastDigits(89);