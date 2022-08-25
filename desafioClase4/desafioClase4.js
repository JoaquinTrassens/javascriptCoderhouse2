// Logica del programa

/*
El Simulador pedira al usuario ingresar un monto y un numero de cuotas 
para solicitar un prestamo,dependiendo la cantidad de cuotas solicitadas sera el recargo.
*/

function calcularRecargo(montoSolicitado) {
    if(cuotasSolicitadas==3){
       return montoSolicitado*0.15
    }else if(cuotasSolicitadas==6){
        return montoSolicitado*0.30
    }else if(cuotasSolicitadas==9){
        return montoSolicitado*0.55
    }else if(cuotasSolicitadas==12){
        return montoSolicitado*0.75
    }else{
        return `NO SE PUEDE SOLICITAR OTRA CANTIDAD DE CUOTAS`
    }
}

let montoSolicitado = parseInt(prompt(`Ingrese el monto que solicita:`));
let cuotasSolicitadas = parseInt(prompt(`Ingresa la cantidad de cuotas que solicita: 3,6,9 o 12`));

let recargo = calcularRecargo(montoSolicitado);
let montoMasRecargo = montoSolicitado+recargo;


console.log(`El recargo es de: `+recargo);
console.log(`El precion con el recargo es de: `+montoMasRecargo);

