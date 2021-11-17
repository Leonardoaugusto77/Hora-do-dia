function carregar(){ 
var msg = document.getElementById('msg') 
var img = document.getElementById('imagem')
var data = new Date() //Cria uma instância JavaScript de Date que representa um único momento no tempo.
var hora = data.getHours() // retorna a hora para a data especificada, de acordo com a hora local.

msg.innerHTML =`Agora são ${hora} horas`
if(hora>=0 && hora < 12){
    img.src = 'manha.png'
    document.body.style.background ='#ECEEED'
} else if(hora >= 12 && hora < 18){
    img.src = 'tarde.png'
    document.body.style.background ='#CEC4BB'
} else {
    img.src = 'noite.png'
    document.body.style.background ='#1D1D32'
}

}
