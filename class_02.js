// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"]
const chars2 = ["O", "Q", "R", "S"]

function missingChar(chars) {
  // 實作寫在這裡
  const num = chars.map(function(e){
    return e.charCodeAt(0)
  })

  let unit = 0
  for(let i = 0; i < num.length; i++){
    if( num[i] - num[i-1] === 2 ){
        unit = num[i] - 1
    }
  }

  return String.fromCodePoint(unit)
}

console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...


/*
說明：
先使用map方法將陣列裡面字串利用charCodeAt全部轉成Unicode碼，
可以得知兩個陣列的Unicode碼都是依序+1遞增，
因此可以得知缺少的字串e和P，前後的Unicode碼差距為2，
利用for迴圈依序抓出來各個數字，
再利用if去判斷前一個數字與當前的數字相減為-2的組合，
找到之後再將該組合的當前數字-1即為缺少的數字，
最後利用String.fromCodePoint的方法將Unicode碼轉回字串
*/