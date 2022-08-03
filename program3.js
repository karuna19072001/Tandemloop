let a = 2
if (a%2 == 0){
    a--
}
let num = 1
let result = []
while(a){ 
    result.push(num)
    num += 2
    a--
}
console.log(result.join(','))