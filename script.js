document.getElementById('surpriseButton').addEventListener('click', function() {
    // Esconde as mensagens iniciais
    document.getElementById('initialMessage').classList.add('hidden');
    
    // Exibe a surpresa
    document.getElementById('surprise').classList.remove('hidden');

    // Toca a música de fundo
    document.getElementById('happySong').play();
});
