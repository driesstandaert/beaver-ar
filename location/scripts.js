window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
  console.log(places);
};

function staticLoadPlaces() {
  return [
    {
      name: 'Magnemite',
      location: {
        lat: 51.622540,
        lng: -0.177321,
      },
      scale: '0.5 0.5 0.5'
    },
    {
      name: 'trout',
      location: {
        lat: 51.6220518,
        lng: -0.1779886,
      },
      scale: '0.5 0.5 0.5'
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;
    let testje = place.name;
    console.log(testje);
    console.log(latitude);
    console.log(longitude);


    let model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
    model.setAttribute('gltf-model', `../assets/${testje}/scene.gltf`);
    model.setAttribute('rotation', '0 180 0');
    model.setAttribute('animation-mixer', '');

    if (model.scale) {
      entity.setAttribute('scale', place.scale);
    }

    model.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);
  });
}