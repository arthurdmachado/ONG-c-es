document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = parseInt(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked')?.value;
    let animal = document.querySelector('input[name="animal"]:checked')?.value;
    let financeiro = document.querySelector('input[name="financeiro"]:checked')?.value;
    let tempo = parseInt(document.getElementById("tempo").value);
    let motivo = document.getElementById("motivo").value;
    let termos = document.querySelector('input[name="termos"]:checked');

    let cpfsCadastrados = ["12345678900", "11122233344", "99988877766"];


    if (nome.length < 3) return alert("Nome inválido!");

    console.log("Idade:", idade); if (isNaN(idade) || idade < 18) return alert("Idade inadequada!");

    if (telefone.length < 8) return alert("Telefone inválido!");

    if (moradia) return alert("Selecione a moradia!");

    if (quintal) return alert("Informe se possui quintal!");

    if (animal) return alert("Informe se já teve animal!");

    if (financeiro) return alert("Informe sua condição financeira!");

    if (tempo > 8) return alert("O animal ficará tempo demais sozinho!");

    if (animal === "nao") {
        return alert("O animal precisará de acompanhamento de adaptação!");
    }

    if (!email.includes("@")) return alert("Email inválido!");

    if (motivo.includes("não tenho dinheiro") || motivo.includes("sem condições")) {
        return alert("Adoção não permitida sem condições financeiras.");
    }

    if (cpfsCadastrados.includes(cpf)) {
        return alert("CPF já cadastrado!");
    }

    if (!termos) {
        return alert("Você precisa aceitar os termos!");
    }


    document.getElementById("resultado").innerHTML =
        "Cadastro realizado com sucesso!<br>Nome: " + nome;
});