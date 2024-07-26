// Definindo uma classe personalizada de ícone que estende L.Icon
var EventIcon = L.Icon.extend({
  options: {
      iconSize:     [30, 30],
      shadowSize:   [50, 64],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
  }
});

// Criando ícones para enchentes com diferentes graus
var aguaLeve = new EventIcon({iconUrl: '../../assets/flooded-housegreen.png'});
var aguaModerada = new EventIcon({iconUrl: '../../assets/flooded-houseorange.png'});
var aguaSevera = new EventIcon({iconUrl: '../../assets/floodRed.png'});

// Criando ícones para deslizamentos com diferentes graus
var DeslizamentoLeve = new EventIcon({iconUrl: '../../assets/landslidegreen.png'});
var DeslizamentoModerado = new EventIcon({iconUrl: '../../assets/landslideorange.png'});
var DeslizamentoSevero = new EventIcon({iconUrl: '../../assets/landslidered.png'});


document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map').setView([-30.0344, -51.2171], 10);

  // Adicione o estilo Humanitarian do OpenStreetMap ou outro tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
  }).addTo(map);

  // Definindo os grupos de marcadores
  var markers = {
    aguaLeve: L.layerGroup(),
    aguaModerada: L.layerGroup(),
    aguaSevera: L.layerGroup(),
    DeslizamentoLeve: L.layerGroup(),
    DeslizamentoModerado: L.layerGroup(),
    DeslizamentoSevero: L.layerGroup()
  };

  // Adicionando marcadores aos grupos correspondentes
  L.marker([-29.9666, -51.2825], {icon: DeslizamentoSevero}).bindPopup("Porto Batista - Crítico").addTo(markers.DeslizamentoSevero);
  L.marker([-30.1083, -51.3237], {icon: DeslizamentoModerado}).bindPopup("Guaíba - Moderado").addTo(markers.DeslizamentoModerado);
  L.marker([-29.9296, -51.7181], {icon: DeslizamentoLeve}).bindPopup("Triunfo - Baixo").addTo(markers.DeslizamentoLeve);
  L.marker([-29.8269, -50.9817], {icon: aguaSevera}).bindPopup("Morungava - Crítico").addTo(markers.aguaSevera);
  L.marker([-29.8245, -51.1454], {icon: aguaModerada}).bindPopup("Sapucaia do Sul - Moderado").addTo(markers.aguaModerada);
  L.marker([-29.9797, -51.2363], {icon: aguaLeve}).bindPopup("Três Pontes - Baixo").addTo(markers.aguaLeve);

  // Adicionando todos os grupos ao mapa
  for (var key in markers) {
    if (markers.hasOwnProperty(key)) {
      markers[key].addTo(map);
    }
  }

  // Função para atualizar a visibilidade dos marcadores com base no zoom
  function updateMarkerVisibility() {
    var zoom = map.getZoom();

    // Definir os limites de zoom para mostrar ou ocultar os marcadores
    var zoomThresholds = {
      aguaLeve: 9,
      aguaModerada: 9,
      aguaSevera: 9,
      DeslizamentoLeve: 9,
      DeslizamentoModerado: 9,
      DeslizamentoSevero: 9
    };

    Object.keys(markers).forEach(function(key) {
      if (zoom < zoomThresholds[key]) {
        map.removeLayer(markers[key]); // Remove os grupos de marcadores se o zoom for menor que o limite
      } else {
        if (!map.hasLayer(markers[key])) {
          markers[key].addTo(map); // Adiciona os grupos de volta se o zoom for maior que o limite
        }
      }
    });
  }

  // Adiciona o evento de zoom
  map.on('zoomend', updateMarkerVisibility);

  // Atualiza a visibilidade ao carregar o mapa
  updateMarkerVisibility();
});