// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
    // 實作寫在這裡
    const soleNum = numbers.reduce(function(acc,num){
        if(numbers.indexOf(num) === numbers.lastIndexOf(num)){
            acc.push(num)
        }
        return acc
    },[])
    return soleNum.join()
  }
  
  console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) // 印出 3
  console.log(findDifferent([2, 2, 2, 4, 2, 2])) // 印出 4
  console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) // 印出 8

  /*
  說明：
  利用reduce和indexOf的特性，
  判斷同一個數字的indexOf是否和lastIndexOf的索引值相同，
  如果只有一個不重複數字，第一次出現和最後一次出現都會是同一個位置
  */