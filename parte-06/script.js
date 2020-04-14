function gerarTabuada() {
    let resultado = document.getElementById('resultado');
    let numero = document.getElementById('numero').valueAsNumber;

    if (isNaN(numero)) {
        window.alert('Campo Número não foi preenchido!');
    } else {
        //"limapando" a div de id="resultado"
        resultado.innerHTML = '';

        let select = document.createElement('select');
        select.setAttribute('size', '11');

        for (let i = 0; i <= 10; i++) {
            let optTexto = '';
            optTexto = optTexto.concat(`${numero} x ${i} = ${numero * i}`);
            let option = document.createElement('option');
            option.text = optTexto;
            option.value = `opt-${numero * i}`;
            select.appendChild(option);

            resultado.appendChild(select);
        }
    }
}
