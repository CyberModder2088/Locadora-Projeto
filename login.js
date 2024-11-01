document.addEventListener("DOMContentLoaded", function () {
    const formProduto = document.getElementById("formProduto");
    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];

    formProduto.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("modelo").value;
        const email = document.getElementById("quantidade").value;
        const modelo = document.getElementById("dias").value;

        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).textContent = nome;
        novaLinha.insertCell(1).textContent = email;
        novaLinha.insertCell(2).textContent = modelo;

        const acaoCell = novaLinha.insertCell(3);
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function () {
            tabela.deleteRow(novaLinha.rowIndex - 1);
        };
        acaoCell.appendChild(botaoRemover);

        formProduto.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const formProduto = document.getElementById("formUsuario");
    const tabela = document.getElementById("tabelaUsuario").getElementsByTagName("tbody")[0];

    formProduto.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).textContent = nome;
        novaLinha.insertCell(1).textContent = email;
        novaLinha.insertCell(2).textContent = telefone;

        const acaoCell = novaLinha.insertCell(3);
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function () {
            tabela.deleteRow(novaLinha.rowIndex - 1);
        };
        acaoCell.appendChild(botaoRemover);

        formProduto.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const formProduto = document.getElementById("formVendas");
    const tabela = document.getElementById("tabelaVendas").getElementsByTagName("tbody")[0];

    formProduto.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("modeloV").value;
        const email = document.getElementById("nomecliente").value;
        const modelo = document.getElementById("diasA").value;

        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).textContent = nome;
        novaLinha.insertCell(1).textContent = email;
        novaLinha.insertCell(2).textContent = modelo;

        const acaoCell = novaLinha.insertCell(3);
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function () {
            tabela.deleteRow(novaLinha.rowIndex - 1);
        };
        acaoCell.appendChild(botaoRemover);

        formProduto.reset();
    });
});
