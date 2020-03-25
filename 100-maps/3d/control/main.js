import { loadModules } from "https://unpkg.com/esri-loader/dist/esm/esri-loader.js";

const createMap = async (element) => {
  var childElement = document.createElement("div");
  element.appendChild(childElement);
  // More info on esri-loader's loadModules function:
  // https://github.com/Esri/esri-loader#loading-modules-from-the-arcgis-api-for-javascript
  const [Map, SceneView] = await loadModules([
    "esri/Map",
    "esri/views/SceneView"
  ], {css: true});
  
  const map = new Map({
    basemap: "streets"
  });
  
  const viewOptions = {
    container: childElement,
    map: map,
    center: [-101.17, 21.78],
    zoom: 2
  };

  new SceneView(viewOptions);
};




window.addEventListener("load", (event) => {
  const rootElement = document.getElementById("wrapperDiv");
  for(let i = 0; i < 100; i++) {
    var element = document.createElement("div");
    element.classList.add('map');
    rootElement.appendChild(element);
    createMap(element);
  }
}, false);


