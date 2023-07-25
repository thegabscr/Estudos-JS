function presente (dinheiro, valor) {
    if (dinheiro < valor){
        return 'Não vai dar pra comprar'
    } else {
        return 'Você realmente precisa fazer essa compra?'
    }
}

let x = presente(100, 90)
console.log(x)