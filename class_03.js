// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
// 程式碼寫在這裡
    const zero = arr.filter((e) => e === 0 )
    const againSort = arr.filter((e) => e !== 0 ).concat(zero)

    return againSort
};

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]


/*
說明：
先宣告一個zero，把零都挑出來，
再宣告一個againSort，把非零的挑出來，再把zero接在後面
*/