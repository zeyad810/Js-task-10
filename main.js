const part1=["C","A","D"]
const part2=["E","M","Y"]
const part3=["C","O","M"]
part3.unshift(".")
let part =part1.concat(part2)
let part4 = part.concat(part3)
console.log(part4.join("").toLowerCase()); 
