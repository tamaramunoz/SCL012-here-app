import HEREMap from 'here-maps-react';

export function Map() {
  return (
      
    <HEREMap
      appId="EseX7GEBrMUT4G2oGO0I"
      appCode="qISHf7_vWevIZTcWctGJRA"
      center={{ lat: 10.998666, lng: -63.79841 }}
      zoom={12}
    />
  );
}
