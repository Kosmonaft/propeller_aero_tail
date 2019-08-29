(() => {
  const mapWrapperId = 'map';
  const maxZoom = 3;
  const mapLayers = new Array();
  let currentZoom = 0;
  let propellerAeroMap;

  const resetView = () => {
    document.querySelectorAll('#actions .action').forEach(actionBtn => {
      actionBtn.disabled = false;
    });
    mapLayers.forEach(layer => {
      layer.removeFrom(propellerAeroMap);
    });
    currentZoom = 1;
    propellerAeroMap.setView(new L.LatLng(0, 0), currentZoom);
  };

  const showItemOnMap = item => {
    let itemLayer = null;
    switch (item) {
      case 'drone':
        itemLayer = new L.polygon([[75, -140], [75, 80], [0, 80], [0, -140]], {
          interactive: false,
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.3
        });
        break;

      case 'flower':
        itemLayer = new L.Circle([82.5, 163], {
          interactive: false,
          radius: 200000
        });
        break;

      case 'reset':
        resetView();
        break;

      default:
        break;
    }

    if (itemLayer) {
      currentZoom = 1;
      propellerAeroMap.setView(new L.LatLng(0, 0), currentZoom);
      mapLayers.push(itemLayer);
      itemLayer.addTo(propellerAeroMap);
    }
  };

  const watchForActionClick = () => {
    document.querySelectorAll('#actions .action').forEach(actionBtn => {
      actionBtn.addEventListener('click', () => {
        if (!actionBtn.disabled) {
          if (actionBtn.dataset.forItem !== 'reset') {
            actionBtn.disabled = true;
          }
          showItemOnMap(actionBtn.dataset.forItem);
        }
      });
    });
  };

  const initMap = () => {
    propellerAeroMap = L.map(mapWrapperId, { maxZoom: maxZoom }).setView(
      [0, 0],
      currentZoom
    );
    L.tileLayer('./assets/tiled/{z}/{x}/{y}.jpg', {}).addTo(propellerAeroMap);
    watchForActionClick();
  };

  if (document.querySelector(`#${mapWrapperId}`)) {
    initMap();
  }
})();
