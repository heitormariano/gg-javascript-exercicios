function validarPreenchimento(inicio, fim, passo) {
    return isNaN(inicio) || isNaN(fim) || isNaN(passo) ? false : true;
}

function validarValorCampos(inicio, fim, passo) {
    let resultado = '';
    if (passo == 0) {
        resultado = 'o valor de Passo deve ser maior do que zero';
    } else if (inicio == fim) {
        resultado = 'Início e Fim iguais. Mude os valores, por favor.';
    } else if (inicio > fim) {
        if (passo > 0) {
            resultado = 'O valor do Passo precisa ser negativo (Início é maior que Fim)';
        }
    } else if (inicio < fim) {
        if (passo < 0) {
            resultado = 'O valor de Passo precisa ser positivo (Início é maior do que Fim)';
        }
    }

    return resultado;
}

function calcular() {
    let resultadoPreenchimento;
    let resultadoValorCampos;

    let inicio = document.getElementById('inicio').valueAsNumber;
    let fim = document.getElementById('fim').valueAsNumber;
    let passo = document.getElementById('passo').valueAsNumber;

    let retorno = document.getElementById('msg-retorno');

    resultadoPreenchimento = validarPreenchimento(inicio, fim, passo);

    if (resultadoPreenchimento) {
        resultadoValorCampos = validarValorCampos(inicio, fim, passo);
        if (resultadoValorCampos.length > 0) {
            retorno.innerHTML = resultadoValorCampos;
        } else {
            let valores = '';
            // usando String.fromCodePoint()
            // Lembrar de subtituir o U por 0x (Ex.: U+1F354 fica 0x1F354)
            let emojiMao = String.fromCodePoint('0x1F449');
            let emojiBandeira = String.fromCodePoint('0x1F3C1');
            if (inicio < fim) {
                //for para valores crescentes
                for (let i = inicio; i < fim; i = i + passo) {
                    valores = valores.concat(i, emojiMao);
                }
            } else {
                // for para valores decrescentes (mudança na condição)
                for (let i = inicio; i > fim; i = i + passo) {
                    valores = valores.concat(i, emojiMao);
                }
            }
            // inserindo o emoji da bandeira no final da contagem
            retorno.innerHTML = valores.concat(emojiBandeira);
        }
    } else {
        retorno.innerHTML = 'Um ou mais campos não foram preenchidos';
    }
}
