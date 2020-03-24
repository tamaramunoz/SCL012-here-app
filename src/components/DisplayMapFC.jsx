// // src/DisplayMapFC.js
// import * as React from 'react';

// export const DisplayMapFC = () => {
//   // Create a reference to the HTML element we want to put the map on
//   const mapRef = React.useRef(null);

  const addMarkersAndSetViewBounds = ()  =>{
    // create map objects
    var toronto = new H.map.Marker({lat:43.7,  lng:-79.4}),
        boston = new H.map.Marker({lat:42.35805, lng:-71.0636}),
        washington = new H.map.Marker({lat:38.8951, lng:-77.0366}),
        group = new H.map.Group();
  
    // add markers to the group
    group.addObjects([toronto, boston, washington]);
    map.addObject(group);
  
    // get geo bounding box for the group and set it to the map
    map.getViewModel().setLookAtData({
      bounds: group.getBoundingBox()
    });
  }

  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
  React.useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "{06Xbckql-JVdM5xLN3eJia30CBj-IxRqHmj8kJxxyLQ}"
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

//     // const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

//     // const ui = H.ui.UI.createDefault(hMap, defaultLayers);

//     // This will act as a cleanup to run once this hook runs again.
//     // This includes when the component un-mounts
//     return () => {
//       hMap.dispose();
//     };
//   }, [mapRef]); // This will run this hook every time this ref is updated

  return <div className="map" ref={addMarkersAndSetViewBounds(mapRef)} style={{ height: "500px" }} />;
};


 