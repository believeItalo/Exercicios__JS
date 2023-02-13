const calcularTabuada = (inicioTabuada, finalTabuada,inicioContador,finalContador) => {
    let comecoTabuada = Number(inicioTabuada);
    let terminoTabuada = Number(finalTabuada);
    let cont;//start da repetição
    let valorInicial = inicioContador
    let valorFinal = finalContador
    let resultado;
    let status = true;

    if(comecoTabuada == 0 || terminoTabuada == 0){
        status = false
        return 'err, values equals to 0'
    }
    else if (isNaN(comecoTabuada) || isNaN(terminoTabuada) || isNaN(valorFinal) || isNaN(valorInicial)){
        status = false
        return 'err, NaN'
    }
    else if(comecoTabuada > 100 || comecoTabuada < 2){
        return 'err, values out of bounds' 
    
    }
    else if(valorInicial < 1 || valorFinal > 50){
        return 'err, values out of bounds'
    }
    else{
        for(let cont = valorInicial; comecoTabuada <= finalTabuada; cont++){
            for(let cont = valorInicial; cont <= valorFinal ; cont++){
                resultado = comecoTabuada * cont
                console.log(`${comecoTabuada} x ${cont} = ${resultado}`);
            }
            comecoTabuada++
            console.log(comecoTabuada, finalTabuada);
        }
        

        
     
          
        
        
       
        
        return status
    }
}
calcularTabuada(2,10,7,10)
module.exports = {
    calcularTabuada
}