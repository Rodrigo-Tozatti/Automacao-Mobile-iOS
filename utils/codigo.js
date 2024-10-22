
const codigo4Digitos = () => {

    function gerarCodigoAleatorio() {
        return Math.floor(1000 + Math.random() * 9000);
    }
    
    return codigo4 = gerarCodigoAleatorio();
}

exports.codigo4Digitos = codigo4Digitos