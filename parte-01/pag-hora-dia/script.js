function carregar() {
    let msg = window.document.getElementById('mensagem');
    let img = window.document.getElementById('imagem');

    let data = new Date();
    let hora = data.getHours();

    if (hora >= 0 && hora < 12) {
        // bom dia
        msg.innerHTML = `Hora Atual: ${hora}h. Bom dia!`;
        img.src = './imgs/manha_recortada.png';
        document.body.style.background = '#fdd246';
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        msg.innerHTML = `Hora Atual: ${hora}h. Boa tarde!`;
        img.src = './imgs/tarde_recortada.png';
        document.body.style.background = '#f9b275';
    } else {
        // boa noite
        msg.innerHTML = `Hora Atual: ${hora}h. Boa noite!`;
        img.src = './imgs/noite_recortada.png';
        document.body.style.background = '#784772';
    }
}
