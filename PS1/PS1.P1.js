const string = "exioi"
const reverseString = string => {
    const splitString = string.split("")
    const sorted = splitString.sort()
    const reversed = sorted.reverse()
    const joined = reversed.join("")


    return joined
}

console.log(`Reverse is: ${reverseString("supercalifragilisticexpialidocious")}`)