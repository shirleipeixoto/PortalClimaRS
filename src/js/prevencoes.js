let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});


/*const box = document.querySelector(".container");
const sections = document.querySelector(".container section")

let contador = 0

function slider() {
    contador++;

    if (contador > sections.length - 1){
      contador = 0;
    }

    box.style.transform = `translateX(${-contador * 1250}px)`;
  }

  setInterval(slider, 2000)




/*const logotipo = document.getElementById("logo")
console.log(logotipo)

const req_seg = document.getElementsByClassName("recomendacoes-seguranca")
console.log(req_seg)



const section = document.createElement('section')

section.setAttribute('class', 'recomendacoes-seguranca')

const main = document.querySelector('main')
main.appendChild(section)

 

const chuva_situacao = document.getElementById("chuva_situacao");
  const textoCompleto = "Em situações de chuvas intensas e risco de alagamento, é fundamental que moradores de zonas suscetíveis a cheias adotem medidas preventivas para evitar situações de risco à vida e dados ao patrimônio.";
  let letraAtual = 0;

  function digitar() {
    if (letraAtual < textoCompleto.length) {
        chuva_situacao.textContent += textoCompleto.charAt(letraAtual);
      letraAtual++;
      setTimeout(digitar, 50); // Ajuste o intervalo conforme desejado
    }
  }

  digitar();*/
 

  