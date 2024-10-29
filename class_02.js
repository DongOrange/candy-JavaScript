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
