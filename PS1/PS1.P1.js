const string = "exioi"
const reverseString = string => {
    var splitString = string.split("")
    var sorted = splitString.sort()
    var reversed = sorted.reverse()
    var joined = reversed.join("")


    return joined
}

console.log(`Reverse is: ${reverseString("supercalifragilisticexpialidocious")}`)