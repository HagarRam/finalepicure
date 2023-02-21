import { GoogleApiWrapper, IMapProps } from 'google-maps-react';
import MapContainer from './MapContainer';

interface IMapViewProps {
  lat: number;
  lng: number;
}

const MapView = (props: IMapViewProps & IMapProps) => {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <MapContainer lat={props.lat} lng={props.lng} />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
})(MapView);