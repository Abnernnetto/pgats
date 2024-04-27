function calcularTotal(ferramentas, comprar){

        if((ferramentas.length == 0 && comprar.length > 0) || (ferramentas.length > 0 && comprar.length == 0)){
            throw new Error (`Ambas as listas precisam ter ao menos um item.`);
        }
       
        if(ferramentas.length == 0 && comprar.length == 0){
            throw new Error (`Ambas as listas precisam ter ao menos um item.`);
        }

        let totalDaCompra = 0;

        for(let i = 0; i < ferramentas.length; i++){
            for(let j = 0; j < comprar.length; j++){
                if(comprar[j] == ferramentas[i].nome){
                    totalDaCompra = totalDaCompra + ferramentas[i].preco; 
                }
            }
        }
        
        if(totalDaCompra === 0){
            throw new Error (`Nenhuma ferramenta desejada encontrada.`);
        }
        
        return `O valor a pagar pelas ferramentas (${comprar.join(", ")}) é R$ ${totalDaCompra.toFixed(2)}`;

}


module.exports = {
    calcularTotal
}