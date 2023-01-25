const generateSeries = (cifras, series, idDraw) => {

    const bolsas = []

    for(let i=0; i<10; i++){
        bolsas[i] = []
    }

    for(let i=0; i<10; i++){
        for(let j=0; j<10**(cifras-1); j++){
            bolsas[i][j] = "" + j
            let stringLen = cifras - bolsas[i][j].length
            let ceros = ''
            for(let k=1; k<stringLen; k++){
                ceros += 0
            }
            bolsas[i][j] = ceros + bolsas[i][j]
        }
    }

    let boletos = ''

    let i=0;
    let cifrasRestantes;
    let primeros = [0,1,2,3,4,5,6,7,8,9]
    let restantesEnBolsa;

    do{	
        boletos += "('"
        for(let j=0; j<series; j++){

            const primerIndice = Math.floor(Math.random() * primeros.length)
            const primer = primeros[primerIndice]

            let indice = Math.floor(Math.random() * bolsas[primer].length)

            const cifra = primer + bolsas[primer][indice]

            boletos += " " + cifra

            primeros.splice(primerIndice, 1)

            bolsas[primer].splice(indice, 1)

        }
        
        boletos += `', ${i}, ${idDraw}),`

        i = i+1

        primeros = []
        cifrasRestantes = 0
        restantesEnBolsa = 0
        
        for(let j=0; j<10; j++){

            if(bolsas[j].length > 0){
                primeros.push(j)
                cifrasRestantes++
                restantesEnBolsa += bolsas[j].length 
            }
        }

    }while(cifrasRestantes >= series)
        
    while(restantesEnBolsa >= series){
        boletos += "('"
        
        for(let j=0; j<series; j++){
            const primerIndice = Math.floor(Math.random() * primeros.length)
            const primer = primeros[primerIndice]

            let indice = Math.floor(Math.random() * bolsas[primer].length)

            const cifra = primer + bolsas[primer][indice]

            boletos += " " + cifra
        
            if(primeros.length > 1){
                primeros.splice(primerIndice, 1);
            }else{
                
            }			

            bolsas[primer].splice(indice, 1)	
            
            primeros = []
            restantesEnBolsa = 0
        
            for(let j=0; j<10; j++){

                if(bolsas[j].length > 0){
                    primeros.push(j)			
                    restantesEnBolsa += bolsas[j].length 
                }
            }
        }
        
        boletos += `', ${i}, ${idDraw}),`
        
        i = i+1

        
    }

    boletos = boletos.substring(0, boletos.length - 1)

    /* console.log('boletos', boletos)
    console.log('restantesEnBolsa', restantesEnBolsa)
    console.log('bolsas', bolsas) */

    return boletos

}

export { generateSeries }