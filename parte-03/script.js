function verificarIdade() {
    let msg = window.document.getElementById('mensagem');
    let img = window.document.getElementById('imagem');

    let anoAtual = new Date().getFullYear();
    let anoInformado = window.document.getElementById('idade').valueAsNumber;

    let idade = anoAtual - anoInformado;

    // if (idade >=0 && idade < 12){
    //     if (){

    //     }
    // }else if (){

    // } else if (){

    // }
    //criança 0 - 11
    //adolescente 12 - 17
    //adulto - 18 - 59 (englobei fase jovem + fase adulta)
    //idoso: 60 ou mais
}
