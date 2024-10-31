let aaa = "lorem ipsum dolor sit amet";

const words = aaa.split(" ")

const total = words.map(function(e){
    return [...e].reduce(function(acc,char){
        return acc + (char.charCodeAt(0) - 96)
    },0)
})

const maxNum = words[total.indexOf(Math.max(...total))]


