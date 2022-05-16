function calcular() {
    let aporteInicial = Number(document.getElementById('aporteInicial').value)
    let aporteMensal = Number(document.getElementById('aporteMensal').value)
    let periodo = Number(document.getElementById('periodo').value)
    let taxaAnual = Number(document.getElementById('taxaAnual').value)
    let taxaMensal = ((((taxaAnual / 100) + 1) ** (1 / 12)) - 1) * 100
    let ano = ""
    let reset = document.createElement('button')
    reset.id = 'reset'

    reset.onclick = function() {
      document.getElementById('aporteInicial').value = ''
      document.getElementById('aporteMensal').value = ''
      document.getElementById('periodo').value = ''
      document.getElementById('taxaAnual').value = ''
      document.getElementById('res').innerHTML = ''
      document.getElementById('aporteInicial').focus()
   }

    if(periodo === 1) {
      ano = "ano"
    } else {
      ano = "anos" 
    }
    
    let rendimentoTotalSobreAporteInicial = (((taxaAnual / 100) + 1) ** periodo) * aporteInicial
    let rendimentoTotalSobreAportesMensais = ((((1 +(taxaMensal / 100)) ** (periodo * 12)) - 1) / (taxaMensal / 100)) * aporteMensal
    let recebidoEmJurosSobreAporteInicial = rendimentoTotalSobreAporteInicial - aporteInicial
    let totalDeAportesMensais = aporteMensal * (periodo * 12)
    let recebidoEmJurosSobreAportesMensais = rendimentoTotalSobreAportesMensais - totalDeAportesMensais
    let aporteTotal = totalDeAportesMensais + aporteInicial
    let rendimentoTotal = rendimentoTotalSobreAporteInicial + rendimentoTotalSobreAportesMensais
    let totalInvestido = rendimentoTotal - aporteTotal
    
    if (aporteInicial == 0 && aporteMensal == 0) {
       window.alert(`Para obter o resultado, você precisa prencher um valor válido de aporte inicial ou aporte mensal, ou ambos.`)
    } else if ( aporteInicial < 0  ) {
       window.alert(`Insira um valor válido para o aporte inicial.`)
    } else if ( aporteMensal < 0 ) {
       window.alert(`Insira um valor válido para o aporte mensal.`)
    } else if ( periodo <= 0 ) {
       window.alert(`Para obter o resultado, você precisa informar um período válido para o seu investimento.`)
    } else if ( taxaAnual <= 0 ) {
       window.alert(`Para obter o resultado, você precisa informar um valor válido para a taxa anual do seu investimento.`)
    } else if ( aporteInicial !=0 && aporteMensal == 0) {
      res.innerHTML = `<p>Se você fizer um aporte único de ${aporteInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} à uma taxa anual de ${taxaAnual}%, ao fim de ${periodo} ${ano} você vai ter acumulado o total de ${rendimentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>
      <p>Valor investido: ${aporteInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p><p>Valor recebido em juros: ${recebidoEmJurosSobreAporteInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p> `
      reset.innerHTML = "Reiniciar Calculadora"
      res.appendChild(reset)
    } else if ( aporteInicial == 0 && aporteMensal != 0 ) {
      res.innerHTML = `<p>Se você fizer aportes mensais de ${aporteMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} à uma taxa anual de ${taxaAnual}%, ao fim de ${periodo} ${ano} você vai ter acumulado o total de ${rendimentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>
      <p>Valor investido: ${totalDeAportesMensais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p><p>Valor recebido em juros: ${recebidoEmJurosSobreAportesMensais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`
      reset.innerHTML = "Reiniciar Calculadora"
      res.appendChild(reset)
    } else {
      res.innerHTML = `<p>Se você fizer um aporte inicial de ${aporteInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} e aportes mensais de ${aporteMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} a uma taxa anual de ${taxaAnual}%, ao fim de ${periodo} ${ano} você vai ter acumulado o total de ${rendimentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>
      <p>Valor investido: ${aporteTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p><p>Valor recebido em juros: ${totalInvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`
      reset.innerHTML = "Reiniciar Calculadora"
      res.appendChild(reset)
    }
    
}
