# Lazy Load ArcGIS JS API Experiments
Experiments in lazy loading the ArcGIS API for JavaScript to get better performance.

## Paragraphs Test

Long page of text with four maps interspersed throughout.

- [control](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/paragraphs/control/) (no lazy loading)
- [intersection-observer](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/paragraphs/intersection-observer/) (Lazy Loading with Intersection Observer)

## 100 Maps Test

Loading 100 map controls on a single page.

- [control](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/control/)
  - No lazy loading
  - On most browsers last n maps load because only n WebGLRenderingContexts allowed
- [intersection-observer](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/intersection-observer/)
  - Lazy Loading with Intersection Observer
- [scroll-stop](https://gavinr.github.io/lazy-load-arcgis-js-api-experiments/100-maps/scroll-stop/)
  - Lazy Loading by checking which maps are in view when scrolling stops
