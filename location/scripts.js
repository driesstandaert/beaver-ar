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
            // lat: 51.6220518,
            // lng: -0.1779886,
            lat: 51.622130,
            lng: -0.178043,
         }
     },
 ];
}

function renderPlaces(places) {
 let scene = document.querySelector('a-scene');

 places.forEach((place) => {
     let latitude = place.location.lat;
     let longitude = place.location.lng;
     console.log(latitude);
     console.log(longitude);
     

     let model = document.createElement('a-entity');
     model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
     model.setAttribute('gltf-model', '../assets/magnemite/scene.gltf');
     model.setAttribute('rotation', '0 180 0');
     model.setAttribute('animation-mixer', '');
     model.setAttribute('scale', '0.5 0.5 0.5');

     model.addEventListener('loaded', () => {
         window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
     });

     scene.appendChild(model);
 });
}