import React from 'react';
import star5 from '../../assets/stars/star5.svg';
import star4 from '../../assets/stars/star4.svg';
import star3 from '../../assets/stars/star3.svg';
import star2 from '../../assets/stars/star2.svg';
import star1 from '../../assets/stars/star1.svg';

interface IRestaurantCard {
	image: any;
}
const ImageChef: React.FC<IRestaurantCard> = (props: IRestaurantCard) => {
	const imageChef: string = props.image;

	return (
		<div className="Images-chefs">
			<img
				className="chef-image"
				alt="chef-image"
				src={imageChef}></img>
		</div>
	);
};
export default ImageChef;
