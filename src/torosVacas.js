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
        for(var i = 0; i < intento.length; i++){
            if(intento[i] == this.codigoSecreto[i]){
                respuesta += "!";
            }
            else if(this.codigoSecreto.includes(intento[i])){
                respuesta += "*";
            }
        }
        if(respuesta == ""){
            respuesta = "NO";
        }
        return respuesta;
    }

}

export default TorosyVacas;