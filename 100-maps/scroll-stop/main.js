import { loadModules } from "https://unpkg.com/esri-loader/dist/esm/esri-loader.js";


// scrollStop from https://vanillajstoolkit.com/helpers/scrollstop/
var scrollStop = function (callback) {
	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;
	// Setup scrolling variable
	var isScrolling;
	// Listen for scroll events
	window.addEventListener('scroll', function (event) {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);
		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {
			// Run the callback
			callback();
		}, 66);
	}, false);
};

const isElementOutViewport = (el) => {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}

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

  // 3D:
  new SceneView(viewOptions);
};


window.addEventListener("load", (event) => {
  
  const allNodes = [];

  const checkAllNodes = () => {
    allNodes.forEach((node) => {
      if (isElementOutViewport(node)) {
        if(node.classList.contains('intersected')) {
          node.classList.remove('intersected');
          while(node.firstChild) {
            node.removeChild(node.firstChild);
          }
        }
      } else {
        if(!node.classList.contains('intersected')) {
          node.classList.add('intersected');
          createMap(node);
        }
        
      }
    });
  };

  const rootElement = document.getElementById("wrapperDiv");
  for(let i = 0; i < 100; i++) {
    var element = document.createElement("div");
    element.classList.add('map');
    rootElement.appendChild(element);
    allNodes.push(element);
  }
  
  scrollStop(function () {
    console.log('Scrolling has stopped.');
    checkAllNodes();
  });

  checkAllNodes(); // once on page load
}, false);


