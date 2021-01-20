console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados [3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados [9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // altera o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // segundo valor indica quantos elementos serão excluídos
console.log(aprovados)

// o array é uma estrutura dinâmica e indexada.
// Array é um objeto.
// é possível acessar elementos através de um índice.
// Um array constante não está relacionados com elementos constantes do array.
