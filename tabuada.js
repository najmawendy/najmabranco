const form = document.querySelector("form")
const resp = document.querySelector("pre")

//ouvinte

form = addEventListener("submit",(e) =>{
    e.preventDeFault()

    const numero = Number(form.imNumero.value)
    let reposta = ""
    for(let i = 1;i <= 10; 1++){
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
    }
    resp.innerText = resposta

}) 

