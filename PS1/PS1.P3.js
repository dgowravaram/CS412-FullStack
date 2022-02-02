
const foo = (str, dec) => {
    const ret = dec(str)
    return ret
}

const breakC = string => {
    const ret = string.split(/(?=[c])/)
    return ret
}

const replaceA = string => {
    const ret = string.replace(/a/gi, "A")

    let aCount = 0
    for(let i = 0; i < string.length; i++){
        if (string[i]=="a"){
            string[i] = "A"
            aCount = aCount + 1
        }
    }

    const table = {
        originalString: string,
        modifiedString: ret,
        numberReplaced: aCount,
        length: ret.length
    }

    return table
}

const call1 = foo("supercalifragilisticexpialidocious",breakC)
console.log(call1)

const call2 = foo("supercalifragilisticexpialidocious", replaceA)
console.table(call2)


// expressions are called correctly?