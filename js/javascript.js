
    function gerarQrCode(){
    const link = document.getElementById('link').value
    /*const altura = document.getElementById('altura').value
    const largura = document.getElementById('largura').value*/
    const cor = document.getElementById('cor').value
    const cor2 = document.getElementById('cor2').value
   


    if(link === ""){
        alert(`Preencha campo link!`)
    /*}else if(altura === ""){
            alert(`Preencha campo altura!`)
    }else if(largura === ""){
            alert(`Preencha campo largura!`)*/
    }else{
        qrcode = new QRCode(document.getElementById("qrcode"), {
                text: link,
                width: 150,
                height: 150,
                colorDark : cor,
                colorLight : cor2,
                correctLevel : QRCode.CorrectLevel.H
            });
        

        limparCampos()
          
    }  
}





function limparCampos(){
    document.getElementById('link').value = ''
    /*document.getElementById('altura').value = ''
    document.getElementById('largura').value = ''*/

}


function refresh(){
    qrcode.clear()
    location.reload()

}

