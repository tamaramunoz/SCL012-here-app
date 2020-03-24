import * as React from 'react';

export const Localization = () =>{
  React.useLayoutEffect(() => {
    if (!mapRef.current) return;

    const H = window.H;

    const platform = new H.service.Platform({ 
        apikey: 'XnB-OTEk-T1WvBsJ6rQG4CctOrapAXUGkB5taUhyXNM' });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 37.773972, lng: -122.431297 },
      zoom: 13,
      pixelRatio: window.devicePixelRatio || 1
    });
    return () => {
        hMap.dispose();
      };
    }, [mapRef]); 
    window.addEventListener('resize', () => map.getViewPort().resize());
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);
    
    //Begin geocoding
    const searchText = '1070 Lombard Street, San Francisco';
    const geocoder = platform.getGeocodingService();
    geocoder.geocode({ searchText }, result => {
      const location = result.Response.View[0].Result[0].Location.DisplayPosition;
      const { Latitude : lat, Longitude: lng } = location;
      const marker = new H.map.Marker({ lat, lng });
      map.addObject(marker);
    });
  

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};


    
    
    
