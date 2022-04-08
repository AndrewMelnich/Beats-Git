let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [56.004796, 92.865292],
    zoom: 12,
    controls: [],
  });

  let coords = [
    [55.986798, 92.854737],
    [55.994446, 92.797586],
    [55.918994, 92.740482],
    [55.968648, 92.374352],
  ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: './image/icons/marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
  myMap.controls.add('zoomControl', {
    size: "large"
  });
};

ymaps.ready(init);