//eu tenho que fazer valor - valorParcelas = 240 vezes
// só que eu tenho que fazer assim

// valor - valorParcelas = total1
// total1 - valorPracelas = total2

let valor = 200000
let numParcelas = 240
let valorParcelas = 833.33
let juros = 0
let acumulados = 0
let total = 0
let lista = []

for (let i = valor; i >= 0; i = i - valorParcelas) {
  juros = +i * 0.00643403110003
  acumulados += juros
  total = valorParcelas + i * 0.00643403110003
  lista.push(juros, total)
  // console.log('juros', juros, 'total', total)
}
// console.log(acumulados)
// console.log(lista)

let jurosP1 = lista[0]
let jurosP2 = lista[2]
let jurosP3 = lista[4]
let jurosP4 = lista[6]
let jurosP5 = lista[8]

let totalP1 = lista[1]
let totalP2 = lista[3]
let totalP3 = lista[5]
let totalP4 = lista[7]
let totalP5 = lista[9]
