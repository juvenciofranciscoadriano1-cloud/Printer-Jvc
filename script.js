document.getElementById('botao').addEventListener('click', function() {
    document.getElementById('mensagem').textContent = 'Olá! Você clicou no botão.';
});
const agora = new Date();
const hora = agora.getHours();
let saudacao = "";
if (hora >= 6 && hora < 12) {
    saudacao = "Bom dia! A Printer JVC já está aberta.";
} else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde! Como podemos ajudar?";
} else {
    saudacao = "Boa noite! Atendemos das 06:30 às 19:00.";
}
const botaoWatsapp = document.getElementById('meuBotao');
botaoWatsapp.addEventListener('click', function() {
    const numero = "258873674154";
    const mensagem = encodeURIComponent("Olá Jvc, estou no site da Printer JVC e gostaria de informações.");
    window.open("https://wa.me/" + 258873674154 + "?ola=" +Text+mensagem, "_blank");
});