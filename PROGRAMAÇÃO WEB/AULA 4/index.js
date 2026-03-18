function tratarError(erro){
    throw new Error("...erro hihihihihi")
}

function imprimir(obj){ 
    try{
        console.log(obj.nome.toUpperCase() + "!!!")
    }
    catch(e){
        tratarError(e)
    }
    finally{
        console.log("Acalme ae")
    }
}

const obj = {nome: "beltrano"}
imprimir(obj)