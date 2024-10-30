// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
    // 實作寫在這裡
    let square = String(num).split("").map( (e) => e * e ).join("")

    return square
}
    
squareDigits();

console.log(squareDigits(3212)) // 印出 9414
console.log(squareDigits(2112)) // 印出 4114
console.log(squareDigits(387)) // 印出 96449


/*
說明：
先將數字轉成字串後，利用split將每個轉字串的數字放到陣列中，再利用map去遍歷每個數字做自己*自己，最後使用join把陣列轉回字串
*/