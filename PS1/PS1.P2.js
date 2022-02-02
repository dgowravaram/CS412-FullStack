const expression = '2^8'

const destructure = string => {
    const spt = string.split("")
    //const left = spt[0]
    //const right = spt[2]
    //const operator = spt[1]

    //return [left, operator, right]
    return spt
}

const evaluate = string => {
    const destructured = destructure(string)

    const left = destructured[0]
    const right = destructured[2]
    const operator = destructured[1]

    if (operator=="+"){
        return parseInt(left) + parseInt(right)

    } else if (operator=="-"){
        return parseInt(left) - parseInt(right)
    } else if (operator=="*"){
        return parseInt(left) * parseInt(right)
    } else if (operator=="/"){
        return parseInt(left) / parseInt(right)
    } else if (operator=="^"){
        return Math.pow(left, right)
    } else if (operator=="%"){
        return parseInt(left) % parseInt(right)
    }

    return "end"

}




const operator = evaluate(expression)
console.log(`${expression} = ${evaluate(expression)}`)

// functions are called correctly?