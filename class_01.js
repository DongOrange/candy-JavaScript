// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
    // 實作程式碼寫在這裡
    arr.sort(function(a,b){
        return a - b
    })
    return arr[0] + arr[1]
  }
  
  const list1 = [19, 5, 42, 2, 77]
  const list2 = [23, 15, 59, 4, 17]
  
  console.log(sumOfSmallestValues(list1)) // 印出 7
  console.log(sumOfSmallestValues(list2)) // 印出 19

/*
說明：
首先使用 sort 排列去比較陣列裡面的數值大小
return a - b 回傳值如果小於 0，會將 a 排在 b 的前面
利用此特性達成由小到大的陣列數字組合，所以可以知道前兩個是最小值
然後直接 return 前兩個的總和
*/