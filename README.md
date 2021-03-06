# Lazy Load ArcGIS JS API Experiments
Experiments in lazy loading the ArcGIS API for JavaScript to get faster page loads.

## Paragraphs Test

Long page of text with four maps interspersed throughout.

- **control** ([2D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/paragraphs/2d/control/) | [3D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/paragraphs/3d/control/))
  - no lazy loading
- **intersection-observer** ([2D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/paragraphs/2d/intersection-observer/) | [3D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/paragraphs/3d/intersection-observer/))
  - Lazy Loading with Intersection Observer

## 100 Maps Test

Loading 100 map controls on a single page.

- **control** ([2D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/2d/control/) | [3D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/3d/control/))
  - No lazy loading
  - On most browsers last n maps load because only n WebGLRenderingContexts allowed
- **intersection-observer** ([2D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/2d/intersection-observer/) | [3D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/3d/intersection-observer/))
  - Lazy Loading with Intersection Observer
- **scroll-stop** ([2D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/2d/scroll-stop/) | [3D](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/3d/scroll-stop/))
  - Lazy Loading by checking which maps are in view when scrolling stops
