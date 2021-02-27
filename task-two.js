//Є натуральне число. Приписати до цоього числа по одиниці зліва і зправа.

const addOnesOnBothEnds = (num) => {
    let stringFromNum = num.toString();
    stringFromNum = Number(`1${num}1`);


    console.log(stringFromNum);
}

addOnesOnBothEnds(579);