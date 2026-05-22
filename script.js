function executarSistema() {
    //Dados de netrada para o sistema nao quebrar
    try {
        // Dados de entrada
        const inputNome = document.getElementById("inputNome");
        const inputIdade = document.getElementById("inputIdade");
        const inputValor = document.getElementById("inputValor");
        const inputCupom = document.getElementById("inputCupom");
        // Dados de saida
        const msg = document.getElementById("mensagem-autorizacao");
        const lista = document.getElementById("lista-estoque");
        const relatorio = document.getElementById("relatorio-final");

        const btn = document.getElementById("btnFinalizar");

        btn.disable = true;
        btn.innerText = "Processando...";
        //trim remove os espaços em branco
        const nome = inputNome.value.trim();
        const idade = parsenInt(inputIdade.value);
        const valor = parseFloat(inputValor.value);
        const cupom = inputCupom.value === "true";

        // Validacao para campos vazios 
        if (!nome || isNaN(idade) || isNaN(valor)) {
            msg.innerText = "Preencha todos os campos corretamente!";
            msg.style.color = "#ff4444";
            return;
        }
        // Regra do negocio
        if (idade >= 16) {
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

    catch (error) {

    }
}
