const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte

form = addEventListener("submit",(e) =>{
    e.preventDeFault()

    const permitida = Number(form.imPermitida.value)
    const condutor = Number(form.inCondutor.value)
    let leve = permitida + (permitida * 0.2)

    if(condutor<= permitida){
        resp.innerText = `situação: Sem Multa`
    
    } else if(condutor<= leve) {
        resp.innerText = `Situação: Multa Leve`

    } else {
        resp.innerText = `Situação Multa grave`
    }
    })
