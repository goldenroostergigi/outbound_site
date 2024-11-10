<!-- src/components/MapShow.vue -->
<template>
  <div class="map-wrapper">
    <h2 class="map-title">Serving People from All Over the World.</h2>
    <div id="map" ref="mapContainer"></div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapShow',
  setup() {
    const mapContainer = ref(null);
    let map = null;

    const handleResize = () => {
      if (map) {
        map.invalidateSize();
      }
    };

    onMounted(() => {
      const isMobile = window.innerWidth <= 768;
      map = L.map(mapContainer.value, {
        center: [20, 0],
        zoom: isMobile ? 1 : 2,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        zoomControl: false,
        boxZoom: false,
        keyboard: false,
        tap: false,
        touchZoom: false,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 21,
      }).addTo(map);

      const highlightedCountries = {
        Mexico: '#fd471f', // Orange
        'United States of America': '#1D3853', // Blue
        Canada: '#1D3853', // Blue
        'United Kingdom': '#1D3853', // Blue
        'New Zealand': '#1D3853', // Blue
        Germany: '#1D3853', // Blue
        Argentina: '#1D3853', // Blue
        Colombia: '#1D3853', // Blue
        Chile: '#1D3853', // Blue
        Peru: '#1D3853', // Blue
        Russia: '#1D3853', // Blue
        Turkey: '#1D3853', // Blue
        Greece: '#1D3853', // Blue
        Ghana: '#1D3853', // Blue
        'South Africa': '#1D3853', // Blue
        Kenya: '#1D3853', // Blue
        Myanmar: '#1D3853', // Blue
        Ukraine: '#1D3853', // Blue
        Nigeria: '#1D3853', // Blue
        France: '#1D3853', // Blue
        Spain: '#1D3853', // Blue
        Venezuela: '#1D3853', // Blue
        Ecuador: '#1D3853', // Blue
        Brazil: '#1D3853', // Blue
        India: '#1D3853', // Blue
        Pakistan: '#1D3853', // Blue
        China: '#1D3853', // Blue
        Australia: '#1D3853', // Blue
        Morocco: '#1D3853', // Blue
      };

      fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then((response) => response.json())
        .then((data) => {
          L.geoJSON(data, {
            style: (feature) => {
              const countryName = feature.properties.name;
              const color = highlightedCountries[countryName] || '#ffffff';
              return {
                color: '#A3A3A3',
                weight: 0.5,
                fillColor: color,
                fillOpacity: 1,
              };
            },
            onEachFeature: (feature, layer) => {
              const countryName = feature.properties.name;
              if (highlightedCountries[countryName]) {
                layer.bindPopup(`${countryName}`);
              }
            },
          }).addTo(map);
        })
        .catch((error) => {
          console.error('Error loading GeoJSON data:', error);
        });

      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      mapContainer,
    };
  },
};
</script>

<style scoped>
.map-wrapper {
  position: relative;
  height: 500px;
  width: 100%;
}

@media (max-width: 600px) {
  .map-wrapper {
    height: 300px;
  }

  .map-title {
    font-size: 1.2em;
    background-color: rgba(255, 255, 255, 0.70) !important;
  }
}


#map {
  height: 100%;
  width: 100%;
}

.map-title {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.95);
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  font-family: 'Marcellus', serif;
  color: #333;
}

.leaflet-control-attribution {
  background: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  padding: 5px;
}
</style>
