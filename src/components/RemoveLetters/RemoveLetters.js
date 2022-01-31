// write a function that accepts 2 parameters (string,number)
//  declare a variable called count = 0
// write a for loop
// write an if statement to compare string[i] == string [i + 1]
// if true count++
// then write an if statement to check count vs number input
// convert string into arr string.split("")
// use an array method to remove the extra repeats
// convert back to string string.join("")
// after extra letter has been removed, make sure to reduce count by 1
// else count = 1 and return string

function RemoveLetters(string, number) {
  let count = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) {
      count++
      if (count > number) {
        let newStr = string.split('')
        newStr.splice(i, 1)
        console.log(newStr)
        string = newStr.join('')
      }
    }
  }
}

RemoveLetters('xxyy', 1)

export default RemoveLetters
