{
    let firstNumber = prompt ('first number')
    let secondNumber = prompt ('second number')
    let thirdNumber = prompt ('third number')

    
    if(firstNumber>secondNumber && firstNumber>thirdNumber)
        console.log ( 'First' )
    else if (secondNumber>firstNumber && secondNumber>thirdNumber)
        console.log ( 'Second' )
    else if (thirdNumber>firstNumber && thirdNumber>secondNumber)
        console.log ( 'Third' )
}