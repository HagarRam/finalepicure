import { useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, IMapProps } from 'google-maps-react';

interface IMapContainerProps {
  google: any;
}

const MapContainer = (props: IMapContainerProps) => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  // Get the data from the Redux slice using useSelector hook
  const { locationLat, locationLng } = useSelector((state: any) => state.restaurants.filteredValue.data.restaurant[0]);

  const initialCenter = {
    lat: locationLat,
    lng: locationLng
  };

  const mapProps: IMapProps = {
    google: props.google,
    zoom: 14,
    style: mapStyles,
    initialCenter,
  };

  return <Map {...mapProps} />;
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
})(MapContainer);