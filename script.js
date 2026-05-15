function executarSistema() {
    // Dados de entrada
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const valor = parseFloat(document.getElementById("inputValor").value);
    const cupom = document.getElementById("inputCupom").value === "true";
     // Dados de saida
     const msg = document.getElementById("mensagem-autorizacao");
     const lista  = document.getElementById("lista-estoque");
     const relatorio = document.getElementById("relatorio-final");

     // Validacao para campos vazios 
     if (!nome || isNaN(idade) || isNaN(valor)) {
        alert("Por favor, preencha todos os campos acima!");
        return;
     }
        // Regra do negocio
        if(idade >=16){
            msg.innerText = `Venda autorizada: ${nome}`;
            msg.style.color = "#00ff88";
            
            // Desconto
            let valor = (valor > 500 || cupom) ? valor * 0.85 : valor;
            
            // Estoque 
            let estoque = ["placa de Video", "Processador", "Memoria RAM"];
            lista.innerHTML = ""; //Limpa a lista anterior
    

        }

     

}