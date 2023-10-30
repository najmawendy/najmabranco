const form = document.querySelector("form")
const resp = document.querySelector("#outResp1")
const resp1 = document.querySelector("#outResp2")

let numContas = 0
let valTotal = 0
let resposta = ""

form.addEventListener("submit") , (e)=>{
    e.preventDefault()

    const descricao = frm.inDescricao.Value
    const valor = Number(frm.inValor.Value)

    numContas++
    valTotal = valTotal + valor

    resposta = resposta + descricao + " - R$: " +valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}`
    resp2.innerText = `${numContas}` Contas(s) - 
}

