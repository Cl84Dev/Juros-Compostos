let result = document.getElementById('resultado')
let botaoDeCalcular = document.getElementById('calcular')
botaoDeCalcular.addEventListener('click', calcular)

function calcular() {
  let aporteInicial = Number(document.getElementById('aporteInicial').value)
  let aporteMensal = Number(document.getElementById('aporteMensal').value)
  let anos = Number(document.getElementById('periodo').value)
  let taxaAnual = Number(document.getElementById('taxaAnual').value)
  let meses = anos * 12
  let taxaMensal = Math.pow(1 + taxaAnual/100, 1/12) -1
  let ano = anos === 1 ? 'ano' : 'anos' 
  let rendimentoTotalSobreAporteInicial = Math.pow(1 + taxaAnual/100, anos) * aporteInicial
  let recebidoEmJurosSobreAporteInicial = rendimentoTotalSobreAporteInicial - aporteInicial
  let rendimentoTotalSobreAportesMensais = (((Math.pow(1 + taxaMensal, meses)) - 1) / (taxaMensal)) * aporteMensal
  let totalDeAportesMensais = aporteMensal * meses
  let recebidoEmJurosSobreAportesMensais = rendimentoTotalSobreAportesMensais - totalDeAportesMensais
  let somaAporteInicialEMensais = totalDeAportesMensais + aporteInicial
  let rendimentoTotal = rendimentoTotalSobreAporteInicial + rendimentoTotalSobreAportesMensais
  let recebidoEmJurosSobreAportesInicialEMensais = rendimentoTotal - somaAporteInicialEMensais
    
  if ((aporteInicial === 0 && aporteMensal === 0) || aporteInicial < 0 || aporteMensal < 0 || anos <= 0 || taxaAnual <= 0) {
    window.alert(`Preencha os campos com valores válidos. Você pode optar em informar apenas o aporte inicial ou o aporte mensal, mas não pode deixar ambos vazios.`)

  } else {
  
    if ( aporteInicial !==0 && aporteMensal === 0) {
      result.innerHTML =
      `<h2>Resultado</h2>
      <p>Se você fizer um aporte único de ${aporteInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} à uma taxa anual de ${taxaAnual}%, ao fim de ${anos} ${ano} você vai ter acumulado o total de ${rendimentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>
      <p>Valor investido: ${aporteInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p>Valor recebido em juros: ${recebidoEmJurosSobreAporteInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <button id="reset" onclick=reiniciar() >Reiniciar Calculadora</button>`
      botaoDeCalcular.disabled = true

    } else if ( aporteInicial === 0 && aporteMensal !== 0 ) {
      result.innerHTML =
      `<h2>Resultado</h2>
      <p>Se você fizer aportes mensais de ${aporteMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} à uma taxa anual de ${taxaAnual}%, ao fim de ${anos} ${ano} você vai ter acumulado o total de ${rendimentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>
      <p>Valor investido: ${totalDeAportesMensais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p>Valor recebido em juros: ${recebidoEmJurosSobreAportesMensais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <button id="reset" onclick=reiniciar() >Reiniciar Calculadora</button>`
      botaoDeCalcular.disabled = true

    } else {
      result.innerHTML =
      `<h2>Resultado</h2>
      <p>Se você fizer um aporte inicial de ${aporteInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} e aportes mensais de ${aporteMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} a uma taxa anual de ${taxaAnual}%, ao fim de ${anos} ${ano} você vai ter acumulado o total de ${rendimentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>
      <p>Valor investido: ${somaAporteInicialEMensais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p><p>Valor recebido em juros: ${recebidoEmJurosSobreAportesInicialEMensais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <button id="reset" onclick=reiniciar() >Reiniciar Calculadora</button>`
      botaoDeCalcular.disabled = true

    }

  }
    
}

function reiniciar() {
  botaoDeCalcular.disabled = false
  result.innerHTML = ''
  document.getElementById('aporteInicial').value = ''
  document.getElementById('aporteMensal').value = ''
  document.getElementById('periodo').value = ''
  document.getElementById('taxaAnual').value = ''
  document.getElementById('aporteInicial').focus()
}
