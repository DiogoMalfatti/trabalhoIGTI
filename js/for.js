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

for (let i = valor; i >= 0; i = i - valorParcelas) {
  juros = +i * 0.00643403110003
  acumulados += juros
  total = valorParcelas + i * 0.00643403110003
  console.log('juros', juros, 'total', total)
}
console.log(acumulados)
