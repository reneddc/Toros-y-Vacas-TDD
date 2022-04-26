class TorosyVacas {
    constructor(codigoSec){
        this.codigoSecreto = codigoSec;
    }

    definirCodigoSecreto(codigoSec){
        this.codigoSecreto = codigoSec;
    }

    adivinar(intento){
        let respuesta = "";
        let caracterToro = "";
        let caracterVaca = "";
        if(intento == this.codigoSecreto){
            return "GANASTE";
        }
        for(var i = 0; i < intento.length; i++){
            caracterToro = this.verificarToros(i, intento);
            respuesta += caracterToro;
            caracterVaca = this.verificarVacas(i, intento, caracterToro);
            respuesta += caracterVaca;
        }
        if(respuesta == ""){
            respuesta = "NO";
        }
        return respuesta;
    }

    verificarToros(posicion, intento){

        let caracter = "";
        if(intento[posicion] == this.codigoSecreto[posicion]){
            caracter = "!";
        }
        return caracter;
    }

    verificarVacas(posicion, intento, caracterToro){
        let caracter = "";
        if(caracterToro == "" && this.codigoSecreto.includes(intento[posicion])){
            caracter = "*";
        }
        return caracter;
    }

}

export default TorosyVacas;