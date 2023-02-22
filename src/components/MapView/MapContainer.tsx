import { useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, IMapProps } from 'google-maps-react';
// import { updateImportEqualsDeclaration } from 'typescript';

interface IMapContainerProps {
	google: any;
	lat: number;
	lng: number;
}
interface ILocation {
	lat: number;
	lng: number;
}
const MapContainer: React.FC<IMapContainerProps> = (props) => {
	const mapStyles = {
		width: '100%',
		height: '100%',
	};

	const { locationLat, locationLng } = useSelector(
		(state: any) => state.restaurants.filteredValue
	);
	const data = useSelector((state: any) => state.restaurants.value);
	console.log(data);

	data.map((restaurant: any) => {
		const lat = restaurant.loctionLat;
		const lng = restaurant.loctionLng;
		const location: ILocation = { lng, lat };
		console.log(location);
		// Do something with the location object
	});

	const initialCenter = {
		lat: locationLat,
		lng: locationLng,
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
