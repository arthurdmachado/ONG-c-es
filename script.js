document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = parseInt(document.getElementeById("idade").value);
    let cidade = parseInt(document.getElementeById("cidade").value);
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked').value;
    let animal = document.querySelector('input[name="animal"]:checked').value;
    let financeiro = document.querySelector('input[name="financeiro"]:checked').value;
    let tempo = document.getElementById("tempo").value;
    let motivo = document.getElementById("motivo").value
    let termos = document.querySelector('input[name="termos"]:checked').value;
    let cpfsCadastrados = ["12345678900", "11122233344", "99988877766"];


    if (nome.lenght < 3) return alert("Nome Inválido!");

    if (idade.lenght < 18) return alert("Idade inadequada!");

    if (telefone.lenght < 8) return alert("Número Inválido!");

    if (tempo > 8) return alert("O animal ficará tempo demais sozinho!");

    if (animal === "nao") return alert("o animal precisará ter aconpanhamento de adaptação")

    if (motivo.includes("não tenho dinheiro") || motivo.includes("sem condições"))
        alert("Adoção não permitida sem condições financeiras.");
    return;

   

    document.getElementById("resultado").innerHTML = "Cadastrado realizado com sucesso!<br>" + "Nome:" +
        nome;
});