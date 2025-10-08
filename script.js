function verificarNome(){
    const nome = document.getElementById('nome').value;
    const msgErroNome = document.getElementById('mensagem-erro-nome');
    
    if(nome.length < 3){
        msgErroNome.textContent = "Nome não pode ser menor de 3 carcteres";
        msgErroNome.style.color = "red";     
        document.getElementById("nome").focus();    //não permite você sair do campo
    } else if(nome.length > 60){
        msgErroNome.textContent = "Nome não pode ser maior que 60 carcteres";
        msgErroNome.style.color = "red";     
        document.getElementById("nome").focus();
    }else if(nome === ""){
        msgErroNome.textContent = "Campo obrigatório";
        msgErroNome.style.color = "red";     
        document.getElementById("nome").focus();
    }else{
        msgErroNome.textContent = "OK";
        msgErroNome.style.color = "green";
    }
}
/*============================================================================================================================*/

function verificarEmail(){
    const email = document.getElementById('email').value;
    const msgErroEmail = document.getElementById('mensagem-erro-email');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if(email.length < 20){
        msgErroEmail.textContent = "Email não pode ser menor de 20 carcteres";
        msgErroEmail.style.color = "red";     
        document.getElementById("email").focus();    //não permite você sair do campo
    } else if(email.length > 100){
        msgErroEmail.textContent = "Email não pode ser maior que 100 carcteres";
        msgErroEmail.style.color = "red";     
        document.getElementById("email").focus();
    }else if(email === ""){
        msgErroEmail.textContent = "Campo obrigatório";
        msgErroEmail.style.color = "red";     
        document.getElementById("email").focus();
    }else if(!emailPattern.test(email)){
        msgErroEmail.textContent = "email invalido";
        msgErroEmail.style.color = "red";
        document.getElementById("email").focus();
    }else{
        msgErroEmail.textContent = "OK";
        msgErroEmail.style.color = "green";
    }
}

/*============================================================================================================================*/

function validarCidade(){
    const cidade = document.getElementById('cidade').value;
    const msgErroCidade = document.getElementById('mensagem-cidade');
    
    if(cidade.length < 5){
        msgErroCidade.textContent = "Nome da sua cidade tem menos de 5 caracteres";
        msgErroCidade.style.color = "red";     
        document.getElementById("cidade").focus();    //não permite você sair do campo
    } else if(cidade.length > 60){
        msgErroCidade.textContent = "Nome não pode ser maior que 60 caracteres";
        msgErroCidade.style.color = "red";     
        document.getElementById("cidade").focus();
    }else if(cidade === ""){
        msgErroCidade.textContent = "Campo obrigatório";
        msgErroCidade.style.color = "red";     
        document.getElementById("cidade").focus();
    }else{
        msgErroCidade.textContent = "OK";
        msgErroCidade.style.color = "green";
    }
}
/*============================================================================================================================*/

function validarEstado(){
    const estado = document.getElementById('estado').value;
    const msgErroEstado = document.getElementById('mensagem-estado');
    
    if(estado.length < 2){
        msgErroEstado.textContent = "O Estado so pode no minimo 2 caracteres";
        msgErroEstado.style.color = "red";     
        document.getElementById("estado").focus();    //não permite você sair do campo
    } else if(estado.length > 2){
        msgErroEstado.textContent = "Estado invalido";
        msgErroEstado.style.color = "red";     
        document.getElementById("estado").focus();
    }else if(estado === ""){
        msgErroEstado.textContent = "Campo obrigatório";
        msgErroEstado.style.color = "red";     
        document.getElementById("estado").focus();
    }else{
        msgErroEstado.textContent = "OK";
        msgErroEstado.style.color = "green";
    }
}
/*============================================================================================================================*/

function verificarSenha(){
    const senha = document.getElementById("senha").value;
    const msgErroSenha = document.getElementById('erro_senha');
    const regexMaiusculo = /[A-Z]/;
    const regexEspecial = /[!@#$%¨&*()<>,.?;:=+*.`´^~{}[]\|]/;
    const regexNumero = /\d/;

    if(senha == ""){
        msgErroSenha.textContent = "Senha não pode estar vazia";
        msgErroSenha.style.color = "red";     
        document.getElementById("senha").focus();
    }else if(senha.length < 8 ){
        msgErroSenha.textContent = "Senha tem que ter no minimo 8 caracteres";
        msgErroSenha.style.color = "red";     
        document.getElementById("senha").focus();
    }else if(senha.length > 60 ){
        msgErroSenha.textContent = "Senha tem que ter no maximo 60 caracteres";
        msgErroSenha.style.color = "red";     
        document.getElementById("senha").focus();
    }else if(!regexMaiusculo.test(senha)){
        msgErroSenha.textContent = "Senha tem que ter letras maiusculas";
        msgErroSenha.style.color = "red";     
        document.getElementById("senha").focus();
    }else if(!regexEspecial.test(senha)){
        msgErroSenha.textContent = "Senha tem que ter caracteres especiais";
        msgErroSenha.style.color = "red";     
        document.getElementById("senha").focus();
    }else if(!regexNumero.test(senha)){
        msgErroSenha.textContent = "Senha deve possuir números";
        msgErroSenha.style.color = "red";     
        document.getElementById("senha").focus();
    }else{
        msgErroSenha.textContent = "OK";
        msgErroSenha.style.color = "green";
    }
}

/**/
function confirmarSenha(){
    const confirmarSenha = document.getElementById('confirmar_senha').value;
    const senha = document.getElementById('senha').value;
    const msgErroConfirSenha = document.getElementById('mensagem-erro-confirmar-senha');

    if(confirmarSenha !== senha){
        msgErroConfirSenha.textContent = "As senhas nao coencidem";
        msgErroConfirSenha.style.color = "red";     
        document.getElementById("confirmar_senha").focus();
    }else if(confirmarSenha === ""){
        msgErroConfirSenha.textContent = "Preencha o campo!";
        msgErroConfirSenha.style.color = "red";     
        document.getElementById("confirmar_senha").focus();
    }else{
        msgErroConfirSenha.textContent = "OK";
        msgErroConfirSenha.style.color = "green";
    }
}
/**/
function aplicarMascaraTelefone(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara (formato: (XX)XXXXX-XXXX)
    if(valor.length <= 10) {
        valor = valor.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1)$2-$3");
    }else {
        valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    }

    input.value = valor;
    return true;
}
function validarTelefone(){
    const  telefone = document.getElementById('telefone').value;
    const  msgErroTelefone = document.getElementById('mensagem-erro-telefone');
                
    // Valida se o telefone tem 14 dígitos
    if (telefone.length !== 14) {
        msgErroTelefone.textContent = 'Telefone inválido! Certifique-se de que o número tenha o formato correto (XX) XXXXX-XXXX.';
        msgErroTelefone.style.color = 'red';
        document.getElementById("telefone").focus();
    } else {    
        msgErroTelefone.textContent = "OK";
        msgErroTelefone.style.color = "green";
    }    
}

/**/
// Função de validação do formulário de cadastro
function validarFormulario() {
    let valid = true;

    // Verificar Nome
    if (!verificarNome()) {
        valid = false;
    }

    // Verificar E-mail
    if (!verificarEmail()) {
        valid = false;
    }

    // Verificar Senha
    if (!validaSenha()) {
        valid = false;
    }

    // Verificar Confirmação de Senha
    if (!confirmarSenha()) {
        valid = false;
    }

    // Verificar Telefone
    if (!validatelefone()) {
        valid = false;
    }

    // Verificar Cidade
    if (!validacidade()) {
        valid = false;
    }

    // Verificar Estado
    if (!validaestado()) {
        valid = false;
    }

    // Verificar CPF
    if (!validacpf()) {
        valid = false;
    }

    // Verificar CNPJ
    if (!validacnpj()) {
        valid = false;
    }

    // Verificar CEP
    if (!validacep()) {
        valid = false;
    }

    // Verificar Data de Nascimento
    if (!validanasc()) {
        valid = false;
    }

    // Se algum campo for inválido, o formulário não será enviado
    if (!valid) {
        return false; // Impede o envio do formulário
    }

    // Se tudo estiver correto, o formulário será enviado
    return true;
}
