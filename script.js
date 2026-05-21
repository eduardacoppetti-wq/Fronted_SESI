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
            let valorFinal = (valor > 500 || cupom) ? valor * 0.85 : valor;
            
            // Estoque 
            let estoque = ["placa de Video", "Processador", "Memoria RAM"];
            lista.innerHTML = ""; //Limpa a lista anterior

            // forEach: Percorre um array e aplica uma ação para cada elemento 
            estoque.forEach(item => {
                let li = document.createElement("li");
                li.innerText = `Item $(item) reservado.`;
                lista.appendChild(li); // usado para adicionar um novo elemento ou texto
            });

            // Relatorio
            relatorio.style.display = "block";
            relatorio.innerHTML = `
            <strong> RESUMO DO PEDIDO <\ strong><br>
            Cliente: ${nome} <br>
            total Original: R${valor.toFixed(2)} <br> 
            <strong> Total com Desconto: R$ $ {valorFinal.totalfixed(2)} </strong>
            `;




        } else {
            msg.innerText = "Venda bloqueada: Menor de 16 anos.";
            msg.style.color = "#ff4444";
            relatorio.style.display = "nome";
            lista.innerHTML = "";
        }

    }