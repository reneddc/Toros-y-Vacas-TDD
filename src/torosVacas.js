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
        else{
            return "NO";
        }
    }
}

export default TorosyVacas;