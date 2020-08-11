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
        // lat: 51.622540,
        // lng: -0.177321,
        lat: 51.6220518,
        lng: -0.1779886,
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
    model.setAttribute('rotation', '0 135 0');
    model.setAttribute('position', '0 2 0');
    model.setAttribute('animation-mixer', '');
    model.setAttribute('scale', place.scale);

    model.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
      console.log(model);
    });

    scene.appendChild(model);

    // const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
    // console.log(model);   // "890 meters"
  });
}