// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
    const count={}
    numbers.forEach((num) => {
        if (count[num]){
            count[num] +=1
        } else{
        count[num] = 1
        }
    });
    return Object.keys(count).find(num => count[num] % 2 !== 0);
}

console.log(findOddElm([1, 1, 2])) // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])) // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])) // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])) // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 印出 5

/*
說明：
先宣告一個空物件後，利用forEach去遍歷陣列裡面每個數字，
當首次出現的數字會記錄成"1"次，重複出現的數字會累加1次，
最後利用find的特性去找物件內第一個出現奇數次的數字
*/