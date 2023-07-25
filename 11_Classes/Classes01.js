// let jogador = {
//     nome: 'Neymar',
//     posicao: 'Atacante',
//     numGols: 400
// }

const jogador = function (nome, posicao, numGols) {
    Nome = nome,
    Posicao = posicao,
    Gols = numGols

    this.getNome = function () {
        return Nome
    }
    this.getPos = function () {
        return Posicao
    }
    this.getGols = function () {
        return Gols
    }
}

const Neymar = new jogador("Neymar", "Atacante", 400)
console.log(Neymar.getNome())
const Renato = new jogador("Renato Augusto", "Meio campo", 80)
console.log(Renato.getNome())