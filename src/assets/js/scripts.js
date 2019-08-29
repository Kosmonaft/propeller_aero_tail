(() => {
  const mapWrapperId = 'map';
  const maxZoom = 3;
  let currentZoom = 0;
  let propellerAeroMap;
  initMap = () => {
    propellerAeroMap = L.map('map', { maxZoom: maxZoom }).setView(
      [0, 0],
      currentZoom
    );
    L.tileLayer('./assets/tiled/{z}/{x}/{y}.jpg', {}).addTo(propellerAeroMap);
  };
  initMap();
})();
