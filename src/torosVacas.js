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
        else if(this.codigoSecreto.includes(intento[0]) && this.codigoSecreto.includes(intento[1])){
            return "**";
        }
        else if(this.codigoSecreto.includes(intento[0])){
            return "*";
        }
        return "NO";
    }
}

export default TorosyVacas;