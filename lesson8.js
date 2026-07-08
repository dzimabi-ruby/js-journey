let fruits = ["Apple", "Mango", "Orange"]
for (let fruit of fruits) {
    console.log(fruit)
}

let numbers = [1, 2, 3, 4]
let result = numbers.map(function(number){
    return number * 10
})
console.log(result)

let students = [
    {
      name : "Ruru",
      score : 99 
    },
    {
      name: "Caro",
      score : 90
    }
]
let yuyu = students.map(function(student) {
    return student.score * 2
}
)
console.log(yuyu);


let colors = [ "red", "yellow", "green", "blue"]
let mee = colors.map(function(color)
{
    return color
})
console.log(mee)