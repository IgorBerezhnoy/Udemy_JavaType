var currRate = "1.05";
var fetchCurr = function (response) {
    return JSON.parse(response);
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        var res = fetchCurr(currRate) * amount * commission;
        console.log(res);
        // Или запись в элемент на странице вместо консоли
    }
    else {
        console.log("Сейчас обмен недоступен");
    }
}
transferEurToUsd(true, 500, 1.05);
// tsc chapter_1/homeWork_less_10/index.ts
