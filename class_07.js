// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
    // 實作寫在這裡
    let oddBout = 0;
    let evenBout = 0;
    let oddNum = null;
    let evenNum = null;

    for( let number of numbers ){
        if( number % 2 === 0 ){
            evenBout++
            evenNum = number
        }else{
            oddBout++
            oddNum = number
        }
    }

    if(evenBout === 1){
        return evenNum
    }else{
        return oddNum
    }
}
  
console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160

/*
說明：
先各別宣告偶數和奇數的數量，只要遍歷到就+1
並把遍歷的數字存放在新宣告的偶數或奇數的容器裡面
最後去判斷如果哪個數量等於1，就把那個容器的數字抓出來
*/