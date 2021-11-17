let simulacaoValor = document.getElementById('simulacaoValor')
let simulacaoPrazo = document.getElementById('simulacaoPrazo')
let simulacaoJuros = document.getElementById('simulacaoJuros')
let resultadoPrazo = document.getElementById('resultadoPrazo')
let resultadoJuros = document.getElementById('resultadoJuros')
let resultadoJurosAcumulados = document.getElementById(
  'resultadoJurosAcumulados',
)

let meses = 12
let resultadoPrazoMes = 0
let taxaMensal = 0

function simular() {
  resultadoPrazoMes = simulacaoPrazo.valueAsNumber * meses
  resultadoPrazo.textContent = resultadoPrazoMes

  taxaMensal = (1 + simulacaoJuros.valueAsNumber) ** 0.0833333 - 1
  resultadoJuros.textContent = taxaMensal

  let valor = simulacaoValor.valueAsNumber
  let valorParcelas = valor / resultadoPrazoMes
  let juros = 0
  let jurosAcumulados = 0
  let total = 0

  for (let i = valor; i >= 0; i = i - valorParcelas) {
    juros = +i * taxaMensal
    jurosAcumulados += juros
    total = valorParcelas + i * taxaMensal
    console.log('juros', juros, 'total', total)
  }
  resultadoJurosAcumulados.textContent = jurosAcumulados
}
