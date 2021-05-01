function calcular(clicked){
    var strnum1 = window.document.getElementById('txtnum1')
    var strnum2 = window.document.getElementById('txtnum2')
    var num1 = Number(strnum1.value)
    var num2 = Number(strnum2.value)
    var conta = clicked
       switch(conta) {
        case "somar":
            var result = num1 + num2
            resultado.innerHTML = `Resultado: ${result}`
            break
        case "diminuir":
            var result = num1 - num2
            resultado.innerHTML = `Resultado: ${result}`
            break
        case "dividir":
            var result = num1 / num2
            resultado.innerHTML = `Resultado: ${result}`
            break
        case "multiplicar":
            var result = num1 * num2
            resultado.innerHTML = `Resultado: ${result}`
            break
    }
}