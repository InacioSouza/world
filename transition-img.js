// Array com objetos contendo a bandeira e o ponto turístico
const locations = [
    { flag: './media/bandeiras/brasil.webp', spot: './media/locais/cristo.webp' },
    { flag: './media/bandeiras/argentina.webp', spot: './media/locais/farol-arg.jpg' },
    { flag: './media/bandeiras/usa.webp', spot: './media/locais/liberdade.jpg' },
    {flag: './media/bandeiras/canada.webp', spot: './media/locais/vancouver.jpg'},
    // Adicione mais pares de imagens conforme necessário
];

// Função para trocar as imagens
function changeImages() {
    const randomIndex = Math.floor(Math.random() * locations.length);
    const selectedLocation = locations[randomIndex];

    document.getElementById('bandeira').src = selectedLocation.flag;
    document.getElementById('local').src = selectedLocation.spot;
}

// Intervalo de tempo para trocar as imagens a cada 5 segundos (5000 ms)
setInterval(changeImages, 5000);
