const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro!
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)
pilotos.unshift('Hamilton') //adiciona na primeira posição do array
console.log(pilotos)
// Splice pode adicionaar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas','Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1) // Massa quebrou novamente :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
