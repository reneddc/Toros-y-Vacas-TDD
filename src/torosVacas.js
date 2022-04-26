class TorosyVacas {
    constructor(codigoSec){
        this.codigoSecreto = codigoSec;
    }

    definirCodigoSecreto(codigoSec){
        this.codigoSecreto = codigoSec;
    }

    adivinar(intento){
        let respuesta = "";
        if(intento == this.codigoSecreto){
            return "GANASTE";
        }
        else{
            for(var i = 0; i < intento.length; i++){
                if(this.codigoSecreto.includes(intento[i])){
                    respuesta += "*";
                }
            }
            if(respuesta == ""){
                respuesta = "NO";
            }
        }
        return respuesta;
    }
}

export default TorosyVacas;