// Definindo uma classe personalizada de ícone que estende L.Icon
var EventIcon = L.Icon.extend({
  options: {
      shadowUrl: 'leaf-shadow.png',
      iconSize:     [38, 95],
      shadowSize:   [50, 64],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
  }
});

// Criando ícones para enchentes com diferentes graus
var aguaLeve = new EventIcon({iconUrl: 'assets/floodRed.png'});
var aguaModerada = new EventIcon({iconUrl: 'flood-moderate.png'});
var aguaSevera = new EventIcon({iconUrl: 'flood-severe.png'});

// Criando ícones para deslizamentos com diferentes graus
var DeslizamentoLeve = new EventIcon({iconUrl: 'landslide-light.png'});
var DeslizamentoModerado = new EventIcon({iconUrl: 'landslide-moderate.png'});
var DeslizamentoSevero = new EventIcon({iconUrl: 'landslide-severe.png'});


// Agora, você pode usar esses ícones para adicionar marcadores ao mapa
document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map').setView([-30.0344, -51.2171], 10);

  // Adicione o estilo Humanitarian do OpenStreetMap ou outro tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
  }).addTo(map);

  // Adicionando marcadores com os ícones personalizados
  L.marker([-29.9666, -51.2825], {icon: DeslizamentoSevero}).addTo(map).bindPopup("Porto Batista");
  L.marker([-30.1083, -51.3237], {icon: DeslizamentoModerado}).addTo(map).bindPopup("Guaíba");
  L.marker([-29.9296, -51.7181], {icon: DeslizamentoLeve}).addTo(map).bindPopup("Triunfo");
  L.marker([-29.8269, -50.9817], {icon: aguaSevera}).addTo(map).bindPopup("Morungava");
  L.marker([-29.8245, -51.1454], {icon: aguaModerada}).addTo(map).bindPopup("Sapucaia do Sul");
  L.marker([-29.9797, -51.2363], {icon: aguaLeve}).addTo(map).bindPopup("Três Pontes");
});

