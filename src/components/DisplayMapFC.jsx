// // src/DisplayMapFC.js
// import * as React from 'react';

// export const DisplayMapFC = () => {
//   // Create a reference to the HTML element we want to put the map on
//   const mapRef = React.useRef(null);

//   /**
//    * Create the map instance
//    * While `useEffect` could also be used here, `useLayoutEffect` will render
//    * the map sooner
//    */
//   React.useLayoutEffect(() => {
//     // `mapRef.current` will be `undefined` when this hook first runs; edge case that
//     if (!mapRef.current) return;
//     const H = window.H;

//     const platform = new H.service.Platform({
//         apikey: "{kSUp4BM5FUYJrZLmTzjxf1bj-2Rmt_SJWHr6xIaxCig}"
//     });

//     const defaultLayers = platform.createDefaultLayers();
//     const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
//       center: { lat: 52, lng: 5 },
//       zoom: 4,
//       pixelRatio: window.devicePixelRatio || 1
//     });

//     function moveMap(map){
//       navigator.geolocation.getCurrentPosition(function(position) {
//           const icon = "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/child-512.png"
//           const iconObject = new window.H.map.Icon(icon, {size:{w: 56, h: 56}})
//           //guardo la posicion en una constante
//           const CurrentPosition = {lat:position.coords.latitude, lng:position.coords.longitude}
//           //creo una instacia marcador de donde estoy ubicada
//           const marker = new window.H.map.Marker(CurrentPosition, {icon:iconObject})
//           //agrego el marcador al mapa
//           map.addObject(marker)
//           //agrego el mapa en la localizacion actual de mi dispositvo
//           map.setCenter(CurrentPosition);
//           //agrego un zoom por defecto
//           map.setZoom(19);
//         });
      
//     }

//     const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

//     const ui = H.ui.UI.createDefault(hMap, defaultLayers);

//     // This will act as a cleanup to run once this hook runs again.
//     // This includes when the component un-mounts
//     return () => {
//       moveMap(hMap)
//       hMap.dispose();
//     };
//   }, [mapRef]); // This will run this hook every time this ref is updated

//   return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
// };

 