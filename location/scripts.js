window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
  console.log(places);
};

function staticLoadPlaces() {
  return [
    {
      name: 'beaver',
      url: '../assets/beaver/beaver.gltf',
      scale: '0.02 0.02 0.02',
      location: {
        lat: 51.622540,
        lng: -0.177321,
      },
    },
    {
      name: 'trout',
      url: '../assets/trout/scene.gltf',
      scale: '0.5 0.5 0.5',
      location: {
        lat: 51.6220518,
        lng: -0.1779886,
      },
      
    }
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    console.log(place.name);
    console.log(place.location.lat);
    console.log(place.location.lng);


    let model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${place.location.lat}; longitude: ${place.location.lng};`);
    model.setAttribute('gltf-model', `${place.url}`);
    model.setAttribute('rotation', '0 180 0');
    model.setAttribute('animation-mixer', '');
    model.setAttribute('scale', place.scale);
    // if (model.position) {
    //   model.setAttribute('position', place.position);
    // }

    model.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);
  });
}