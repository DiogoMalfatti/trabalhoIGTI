let simulacaoValor = document.getElementById('simulacaoValor')
let simulacaoPrazo = document.getElementById('simulacaoPrazo')
let simulacaoJuros = document.getElementById('simulacaoJuros')
let resultadoPrazo = document.getElementById('resultadoPrazo')
let resultadoJuros = document.getElementById('resultadoJuros')
let resultadoJurosAcumulados = document.getElementById(
  'resultadoJurosAcumulados',
)
let parcela1 = document.getElementById('parcela1')
let parcela2 = document.getElementById('parcela2')
let parcela3 = document.getElementById('parcela3')
let parcela4 = document.getElementById('parcela4')
let parcela5 = document.getElementById('parcela5')
let parcela6 = document.getElementById('parcela6')

let jurosParcela1 = document.getElementById('jurosParcela1')
let jurosParcela2 = document.getElementById('jurosParcela2')
let jurosParcela3 = document.getElementById('jurosParcela3')
let jurosParcela4 = document.getElementById('jurosParcela4')
let jurosParcela5 = document.getElementById('jurosParcela5')
let jurosParcela6 = document.getElementById('jurosParcela6')

let totalParcela1 = document.getElementById('totalParcela1')
let totalParcela2 = document.getElementById('totalParcela2')
let totalParcela3 = document.getElementById('totalParcela3')
let totalParcela4 = document.getElementById('totalParcela4')
let totalParcela5 = document.getElementById('totalParcela5')
let totalParcela6 = document.getElementById('totalParcela6')

let meses = 12
let resultadoPrazoMes = 0
let taxaMensal = 0
let valorParcela = 0

function simular() {
  resultadoPrazoMes = simulacaoPrazo.valueAsNumber * meses
  resultadoPrazo.textContent = resultadoPrazoMes

  taxaMensal = (1 + simulacaoJuros.valueAsNumber) ** 0.0833333 - 1
  resultadoJuros.textContent = taxaMensal.toFixed(5)

  let valor = simulacaoValor.valueAsNumber
  let valorParcelas = valor / resultadoPrazoMes
  let juros = 0
  let jurosAcumulados = 0
  let total = 0
  let lista = []

  for (let i = valor; i >= 0; i = i - valorParcelas) {
    juros = +i * taxaMensal
    jurosAcumulados += juros
    total = valorParcelas + i * taxaMensal
    lista.push(juros.toFixed(2), total.toFixed(2))
    // console.log('juros', juros, 'total', total)
  }
  resultadoJurosAcumulados.textContent = jurosAcumulados.toFixed(2)

  parcela1.textContent = valorParcelas.toFixed(2)
  parcela2.textContent = valorParcelas.toFixed(2)
  parcela3.textContent = valorParcelas.toFixed(2)
  parcela4.textContent = valorParcelas.toFixed(2)
  parcela5.textContent = valorParcelas.toFixed(2)
  parcela6.textContent = valorParcelas.toFixed(2)

  jurosParcela1.textContent = lista[0]
  jurosParcela2.textContent = lista[2]
  jurosParcela3.textContent = lista[4]
  jurosParcela4.textContent = lista[6]
  jurosParcela5.textContent = lista[8]
  jurosParcela6.textContent = lista[10]

  totalParcela1.textContent = lista[1]
  totalParcela2.textContent = lista[3]
  totalParcela3.textContent = lista[5]
  totalParcela4.textContent = lista[7]
  totalParcela5.textContent = lista[9]
  totalParcela6.textContent = lista[11]
}
