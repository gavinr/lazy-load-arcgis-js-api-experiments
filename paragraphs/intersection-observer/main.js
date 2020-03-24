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
    basemap: "streets-vector"
  });
  
  const viewOptions = {
    container: childElement,
    map: map,
    center: [parseFloat(element.dataset.x), parseFloat(element.dataset.y)],
    zoom: parseInt(element.dataset.zoom)
  };

  // 3D:
  new SceneView(viewOptions);
};




window.addEventListener("load", (event) => {
  const callback = (entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting && !entry.target.classList.contains('intersected')) {
        // console.log('entry:', entry.target);
        entry.target.classList.add('intersected');
        createMap(entry.target);
      } else {
        entry.target.classList.remove('intersected');
        while(entry.target.firstChild) {
          entry.target.removeChild(entry.target.firstChild);
        }
          
      }
    });
    
  }
  let observer = new IntersectionObserver(callback, {
    threshold: 0.1
  });
  
  
  ['map1', 'map2', 'map3', 'map4'].forEach((id) => {
    const rootElement = document.getElementById(id);
    observer.observe(rootElement);
  });
  
}, false);
