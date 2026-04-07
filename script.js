document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal]:checked').value;

    if(nome.lenght < 3) return alert ("Nome Inválido");

    document.getElementById("resultado").innerHTML= "Cadastrado realizado com sucesso!<br>" + "Nome:" +
    nome;
});