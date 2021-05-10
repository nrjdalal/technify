"use strict";
module.exports = (numbers) => {
    let limit = 0;
    numbers.forEach((num) => {
        const numArr = num.toString().split('.');
        if (numArr[1]) {
            if (numArr[1].length > limit) {
                limit = numArr[1].length;
            }
        }
    });
    return limit;
};
