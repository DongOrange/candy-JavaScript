// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
    // 實作在這裡
    const secondTime = String(seconds % 60).padStart(2, 0);
    const minuteTime = String(Math.floor(seconds / 60) % 60).padStart(2, 0)
    const hourTime = String(Math.floor(seconds /3600)).padStart(2, 0)

    return `${hourTime} : ${minuteTime} : ${secondTime}`
}
  
console.log(humanReadableTimer(0)) // 印出 00:00:00
console.log(humanReadableTimer(59)) // 印出 00:00:59
console.log(humanReadableTimer(60)) // 印出 00:01:00
console.log(humanReadableTimer(90)) // 印出 00:01:30
console.log(humanReadableTimer(3599)) // 印出 00:59:59
console.log(humanReadableTimer(3600)) // 印出 01:00:00
console.log(humanReadableTimer(45296)) // 印出 12:34:56
console.log(humanReadableTimer(86399)) // 印出 23:59:59
console.log(humanReadableTimer(86400)) // 印出 24:00:00
console.log(humanReadableTimer(359999)) // 印出 99:59:59


/*
說明：
1分鐘=60秒
60分鐘=1小時

依照此公式利用取餘數的方式
秒的計算直接取餘數算餘幾秒
分的計算先除以60算出總共有幾分鐘，因為會超過60分鐘，所以再利用取餘數算有幾分鐘的概念
時的計算直接除以3600(60x60)去看有幾小時

以上三種都利用padStart的方法去顯示兩位數字，少於兩位數就補0
*/