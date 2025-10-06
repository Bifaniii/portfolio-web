function enviarWhats(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const telefone = '5511964834564';

    if (!nome || !mensagem) {
        alert('Por favor, preencha seu nome e a mensagem antes de enviar.');
        return;
    }

    const texto = `Olá, me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    window.open(url, '_blank');
}
