// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {

    const digits = String(num).split('');
    const arr = [];

    for (let i = 0; i < digits.length; i++) {
        const placeValue = Math.pow(10, digits.length - i - 1);
        const digitValue = Number(digits[i]);

        if (digitValue !== 0) {
            if (i !== digits.length - 1) {
                arr.push(`${placeValue} x ${digitValue}`);
            } else {
                arr.push(digitValue);
            }
        }
    }

    return arr.join(' + ');
}

console.log(expandedForm(8)) // 印出 8
console.log(expandedForm(25)) // 印出 10 x 2 + 5
console.log(expandedForm(148)) // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)) // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)) // 印出 10000 x 6 + 100 x 3 + 8

/**
說明：
先宣告一個變數，讓數字轉成字串，再用split把每個數字(字串型態)一個一個拆分
利用for迴圈去依序跑每串數字，看length去得知每串數字是幾次方
if去判斷如果i不等於自身長度-1的數字，就去把自身的數字乘上10的幾次方，然後加入到新的空陣列中
當等於自身長度-1的數字時表示是個位數，則不做乘上次方的動作
最後利用join補上+號
**/