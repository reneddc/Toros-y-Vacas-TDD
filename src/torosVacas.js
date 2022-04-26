class TorosyVacas {
    constructor(codigoSec){
        this.codigoSecreto = codigoSec;
    }

    definirCodigoSecreto(codigoSec){
        this.codigoSecreto = codigoSec;
    }

    adivinar(intento){
        if(intento == this.codigoSecreto){
            return "GANASTE";
        }
        else if(this.codigoSecreto.search(intento[0]) > -1){
            return "*";
        }
        return "NO";
    }
}

export default TorosyVacas;