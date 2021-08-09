

document.querySelector('.red').addEventListener('click',cambio)
document.querySelector('.green').addEventListener('click',cambio)
document.querySelector('.blue').addEventListener('click',cambio)
document.querySelector('.yellow').addEventListener('click',cambio)

document.querySelector('.bred').addEventListener('click',cambio)
document.querySelector('.bgreen').addEventListener('click',cambio)
document.querySelector('.bblue').addEventListener('click',cambio)
document.querySelector('.byellow').addEventListener('click',cambio)

document.querySelector('.sred').addEventListener('click',cambio)
document.querySelector('.sgreen').addEventListener('click',cambio)
document.querySelector('.sblue').addEventListener('click',cambio)
document.querySelector('.syellow').addEventListener('click',cambio)

function functionTexto() {
    try {
        let text = window.getSelection().focusNode.parentElement.innerHTML
        console.log(text)
        return text
    } catch {
        console.log('No hay nada seleccionado')
    }
    
    
}
function functionSeleccion() {
    try {
        let selection = window.getSelection().toString()
        console.log(selection)
        return selection
    } catch {
        console.log('No hay nada seleccionado')
    }
    
    
}
function cambio(e) {
    let texto = functionTexto()
    let select = functionSeleccion()
    let newSelect;
    console.log(e.target.className)
    if(e.target.className==='red') {
        newSelect = '<a class="red">'+select+'</a>'
    }
    if(e.target.className==='blue') {
        newSelect = '<a class="blue">'+select+'</a>'
    }
    if(e.target.className==='green') {
        newSelect = '<a class="green">'+select+'</a>'
    }
    if(e.target.className==='yellow') {
        newSelect = '<a class="yellow">'+select+'</a>'
    }
    //
    if(e.target.className==='bred') {
        newSelect = '<a class="bred">'+select+'</a>'
    }
    if(e.target.className==='bblue') {
        newSelect = '<a class="bblue">'+select+'</a>'
    }
    if(e.target.className==='bgreen') {
        newSelect = '<a class="bgreen">'+select+'</a>'
    }
    if(e.target.className==='byellow') {
        newSelect = '<a class="byellow">'+select+'</a>'
    }
    //
    if(e.target.className==='sred') {
        newSelect = '<a class="sred">'+select+'</a>'
    }
    if(e.target.className==='sblue') {
        newSelect = '<a class="sblue">'+select+'</a>'
    }
    if(e.target.className==='sgreen') {
        newSelect = '<a class="sgreen">'+select+'</a>'
    }
    if(e.target.className==='syellow') {
        newSelect = '<a class="syellow">'+select+'</a>'
    }
    console.log(newSelect)
    let newText = texto.replace(select,newSelect)

    window.getSelection().focusNode.parentElement.innerHTML = newText
}