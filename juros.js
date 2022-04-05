let val = document.getElementById('valor')
let men = document.getElementById('men')
let tem = document.getElementById('tempo')
let tax = document.getElementById('taxa')
let res = document.getElementById('res')
let deta = document.getElementById('deta')
let reset = document.createElement('button')
reset.id = 'reset'
reset.style.background = 'rgb(40, 120, 212)'
reset.style.color = 'white'
reset.style.borderRadius = '15px'
reset.style.padding = '15px'
reset.style.width = '150px'
reset.style.fontSize = '12pt'
reset.style.font = 'arial'
reset.style.fontWeight = 'bold'
reset.style.textAlign = 'center'

reset.onclick = function() {
    val.value = ''
    men.value = ''
    tem.value = ''
    tax.value = ''
    res.innerHTML = ''
    val.focus()
}

function calcular() {
    let valor = Number(val.value)
    let mensal = Number(men.value)
    let tempo = Number(tem.value)
    let taxa = Number(tax.value)
    let mtaxa = ((((taxa / 100) + 1) ** (1 / 12)) - 1) * 100
    let brl = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let mbrl = mensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    

    if(tempo === 1) {
       let ano = "ano"
    } else {
       let ano = "anos" 
    }
    
    let totala = (((taxa / 100) + 1) ** tempo) * valor
    let totalm = ((((1 +(mtaxa / 100)) ** (tempo * 12)) - 1) / (mtaxa / 100)) * mensal
    let apounjur = totala - valor
    let totmen = mensal * (tempo * 12)
    let apomenjur = totalm - totmen
    let totapo = totmen + valor
    let total = totala + totalm
    let totapojur = total - totapo
    let apounjurbrl = apounjur.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let totmenbrl = totmen.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let apomenjurbrl = apomenjur.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let totapobrl = totapo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let totapojurbrl = totapojur.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let totbrl = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    if ( valor === 0 && mensal === 0) {
       window.alert(`Para obter o resultado, você precisa prencher um valor válido de aporte inicial ou mensal, ou ambos.`)
    } else if ( valor < 0  ) {
       window.alert(`Insira um valor válido para o aporte inicial.`)
    } else if ( mensal < 0 ) {
       window.alert(`Insira um valor válido para o aporte mensal.`)
    } else if ( tempo <= 0 ) {
       window.alert(`Para obter o resultado, você precisa informar um período válido para o seu investimento.`)
    } else if ( taxa <= 0 ) {
       window.alert(`Para obter o resultado, você precisa informar um valor válido para a taxa anual do seu investimento.`)
    } else if ( valor !=0 && mensal === 0) {
      res.innerHTML = `<p>Se você fizer um aporte único de ${brl} à uma taxa anual de ${taxa}%, ao fim de ${tempo} ${ano} você vai ter acumulado o total de ${totbrl}.</p>
      <p>Valor investido: ${brl}</p><p>Valor recebido em juros: ${apounjurbrl}</p> `
      reset.innerHTML = "Reiniciar Calculadora"
      res.appendChild(reset)
    } else if ( valor === 0 && mensal != 0 ) {
      res.innerHTML = `<p>Se você fizer aportes mensais de ${mbrl} à uma taxa anual de ${taxa}%, ao fim de ${tempo} ${ano} você vai ter acumulado o total de ${totbrl}.</p>
      <p>Valor investido: ${totmenbrl}</p><p>Valor recebido em juros: ${apomenjurbrl}</p>`
      reset.innerHTML = "Reiniciar Calculadora"
      res.appendChild(reset)
    } else {
      res.innerHTML = `<p>Se você fizer um aporte inicial de ${brl} e aportes mensais de ${mbrl} a uma taxa anual de ${taxa}%, ao fim de ${tempo} ${ano} você vai ter acumulado o total de ${totbrl}.</p>
      <p>Valor investido: ${totapobrl}</p><p>Valor recebido em juros: ${totapojurbrl}</p>`
      reset.innerHTML = "Reiniciar Calculadora"
      res.appendChild(reset)
    }
    
}