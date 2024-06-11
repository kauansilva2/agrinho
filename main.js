// Função para validar o formulário de contato
function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Verificar se todos os campos estão preenchidos
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    // Verificar se o campo de e-mail possui um formato válido
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    // Se todas as validações passarem, retornar verdadeiro
    return true;
}

// Event listener para o envio do formulário
document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
        // Impedir o envio do formulário se a validação falhar
        event.preventDefault();
    }
});

