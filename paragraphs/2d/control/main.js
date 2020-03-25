import { loadModules } from "https://unpkg.com/esri-loader/dist/esm/esri-loader.js";

const createMap = async (element) => {
  var childElement = document.createElement("div");
  element.appendChild(childElement);
  // More info on esri-loader's loadModules function:
  // https://github.com/Esri/esri-loader#loading-modules-from-the-arcgis-api-for-javascript
  const [Map, MapView] = await loadModules([
    "esri/Map",
    "esri/views/MapView"
  ], {css: true});
  
  const map = new Map({
    basemap: "streets-vector"
  });
  
  const viewOptions = {
    container: childElement,
    map: map,
    center: [parseFloat(element.dataset.x), parseFloat(element.dataset.y)],
    zoom: parseInt(element.dataset.zoom)
  };

  new MapView(viewOptions);
};




window.addEventListener("load", (event) => {
  
  ['map1', 'map2', 'map3', 'map4'].forEach((id) => {
    const rootElement = document.getElementById(id);
    createMap(rootElement);
  });
  
}, false);
