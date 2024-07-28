// para selecionar todas as imagens do meu html (melhor)
const images = document.querySelectorAll('img');

// imprimi-las no console para...
images.forEach((img, index) => {
console.log(`Imagem ${index + 1}:`, img);
});
