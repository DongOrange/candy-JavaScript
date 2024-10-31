// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
    // 實作寫在這裡
    const words = input.split(" ")

    const total = words.map(function(e){
        return [...e].reduce(function(acc,char){
            return acc + (char.charCodeAt(0) - 96)
        },0)
    })

    return words[total.indexOf(Math.max(...total))]
    
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there

/*
說明：
先將字串裡面每個單字獨立出來放到陣列中
再利用map遍歷每個單字，用擴展運算子把單字拆解成字母，用reduce + charCodeAt(轉換成 Unicode數字) 去計算每個單字內的字母總和
最後利用數學函式找出最大數字
*/