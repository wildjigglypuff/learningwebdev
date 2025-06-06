let score="45"

//if you want the type of score to be number then

let value_in_number= Number(score)
console.log(typeof value_in_number)
console.log(value_in_number)

//but in case your string is not a pure number

score="45abc"
let value_in_number2= Number(score)
console.log(typeof value_in_number2) //number
console.log(value_in_number2) //NaN = not an number : but iska type number hi hai

//it gets converted but the value printed becomes Nan

/*
conversions:
null-num =0
undefined-num=Nan
true-num=1
false-num=0
string with pure numbers= num
string with number and letters= NaN

1-bool = true
0-bool = false
""-bool= false
"kfher"-bool= true
*/

number=null //undefined
isbool=Boolean(number)
console.log(typeof isbool)
console.log(isbool)
//out= false

