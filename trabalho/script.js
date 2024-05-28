window.onload = function(e){

    let botao_enviar = document.getElementById("btn_enviar");
    let txtNome = document.getElementById("input_nome");
    let txtEmail = document.getElementById("input_email");
    let txtMensagem = document.getElementById("input_mensagem");

    txtNome.focus();

    botao_enviar.onclick = function (e) {

        let nome = txtNome.value;
        let email = txtEmail.value;
        let mensagem = txtMensagem.value;

        if (nome == "") {
            alert("Nome Obrigatório!")
        }
        else if (email == "") {
            alert("Email Obrigatório!")
        }
        else if (mensagem == "") {
            alert("Mensagem Obrigatória!")
        }
        else {
            alert("Email enviado com Sucesso!")
        }

    };
}






