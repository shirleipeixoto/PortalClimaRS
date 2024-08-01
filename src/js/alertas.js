let EventIcon = L.Icon.extend({
  options: {
      iconSize:     [30, 30],
      shadowSize:   [50, 64],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
  }
});

let aguaLeve = new EventIcon({iconUrl: '../../assets/img/flooded-housegreen.png'});
let aguaModerada = new EventIcon({iconUrl: '../../assets/img/flooded-houseorange.png'});
let aguaSevera = new EventIcon({iconUrl: '../../assets/img/floodRed.png'});

let DeslizamentoLeve = new EventIcon({iconUrl: '../../assets/img/landslidegreen.png'});
let DeslizamentoModerado = new EventIcon({iconUrl: '../../assets/img/landslideorange.png'});
let DeslizamentoSevero = new EventIcon({iconUrl: '../../assets/img/landslidered.png'});

document.addEventListener('DOMContentLoaded', function() {
  let map = L.map('map').setView([-30.0344, -51.2171], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
  }).addTo(map);

  let markers = {
    aguaLeve: L.layerGroup(),
    aguaModerada: L.layerGroup(),
    aguaSevera: L.layerGroup(),
    DeslizamentoLeve: L.layerGroup(),
    DeslizamentoModerado: L.layerGroup(),
    DeslizamentoSevero: L.layerGroup()
  };

  L.marker([-29.9666, -51.2825], {icon: DeslizamentoSevero}).bindPopup("Porto Batista - Crítico").addTo(markers.DeslizamentoSevero);
  L.marker([-30.1083, -51.3237], {icon: DeslizamentoModerado}).bindPopup("Guaíba - Moderado").addTo(markers.DeslizamentoModerado);
  L.marker([-29.9296, -51.7181], {icon: DeslizamentoLeve}).bindPopup("Triunfo - Baixo").addTo(markers.DeslizamentoLeve);
  L.marker([-29.8269, -50.9817], {icon: aguaSevera}).bindPopup("Morungava - Crítico").addTo(markers.aguaSevera);
  L.marker([-29.8245, -51.1454], {icon: aguaModerada}).bindPopup("Sapucaia do Sul - Moderado").addTo(markers.aguaModerada);
  L.marker([-29.9797, -51.2363], {icon: aguaLeve}).bindPopup("Três Pontes - Baixo").addTo(markers.aguaLeve);

  // Adicionando todos os grupos ao mapa
  for (let key in markers) {
    if (markers.hasOwnProperty(key)) {
      markers[key].addTo(map);
    }
  }

  function updateMarkerVisibility() {
    let zoom = map.getZoom();

    let zoomThresholds = {
      aguaLeve: 9,
      aguaModerada: 9,
      aguaSevera: 9,
      DeslizamentoLeve: 9,
      DeslizamentoModerado: 9,
      DeslizamentoSevero: 9
    };

    Object.keys(markers).forEach(function(key) {
      if (zoom < zoomThresholds[key]) {
        map.removeLayer(markers[key]);
      } else { (!map.hasLayer(markers[key]))
          markers[key].addTo(map);
      }
    });
  }

  map.on('zoomend', updateMarkerVisibility);

  updateMarkerVisibility();
});

// Seleção dos elementos para o primeiro modal
const modal1 = document.getElementById("modal1");
const openBtn1 = document.getElementById("modalBtn1");
const closeBtn1 = document.getElementById("closeBtn1");

openBtn1.addEventListener("click", () => {
    modal1.style.display = "block";
    document.body.classList.add("no-scroll");
});

closeBtn1.addEventListener("click", () => {
    modal1.style.display = "none";
    document.body.classList.remove("no-scroll");
});

window.addEventListener("click", (event) => {
    if (event.target === modal1) {
        modal1.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
});

const modal2 = document.getElementById("modal2");
const openBtn2 = document.getElementById("modalBtn2");
const closeBtn2 = document.getElementById("closeBtn2");

openBtn2.addEventListener("click", () => {
    modal2.style.display = "block";
    document.body.classList.add("no-scroll");
});

closeBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
    document.body.classList.remove("no-scroll");
});

window.addEventListener("click", (event) => {
    if (event.target === modal2) {
        modal2.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
});


//modo noturno
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    const socialIcon = document.getElementById('social-icon');
    const aboutIcon = document.getElementById('about-icon');
    const contactIcon = document.getElementById('contact-icon');
    const logoIcon = document.getElementById('logo-trocar')

    // Alterna a classe 'dark-mode'
    body.classList.toggle('dark-mode');
    
    // Atualiza o ícone do modo noturno
    if (body.classList.contains('dark-mode')) {
        modeIcon.src = '../../assets/img/sun.png';
        modeIcon.alt = 'Desativar Modo Noturno';
        // Atualiza os ícones do rodapé para o modo noturno
        socialIcon.src = '../../assets/img/redessociaisnoturno.png'; 
        aboutIcon.src = '../../assets/img/sobrenosnoturno.png';
        contactIcon.src = '../../assets/img/contatonoturno.png';
        logoIcon.src = '../../assets/img/portalClimaNoturno.png';
    } else {
        modeIcon.src = '../../assets/img/moon.png';
        modeIcon.alt = 'Ativar Modo Noturno';
        // Atualiza os ícones do rodapé para o modo claro
        socialIcon.src = '../../assets/img/redeSocial.png';
        aboutIcon.src = '../../assets/img/sobreNos.png';
        contactIcon.src = '../../assets/img/contato.png';
        logoIcon.src = '../../assets/img/logo2.png'
    }
});