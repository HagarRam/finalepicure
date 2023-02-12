import React from 'react';
import yossiImag from '../../assets/yossiShitrit.svg';
import Onza from '../../assets/onza.svg';
import KitchenMarket from '../../assets/KitchenMarket.svg';
import Mashya from '../../assets/Mashya.svg';
import './ChefOfTheWeek.css';
import ChefCard from './ChefCard';
const chef = {
	img: yossiImag,
	name: 'Yoosi Shitrit',
	description:
		'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrits creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.',
	restaurant: [
		{ name: 'Onza', img: Onza },
		{ name: 'Kitchen Market', img: KitchenMarket },
		{ name: 'Mashya', img: Mashya },
	],
};

const ChefOfTheWeek: React.FC = () => {
	return (
		<div id="chef-of-the-week">
			<div id="titlechef">CHEF OF THE WEEK:</div>
			<div id="information">
				<ChefCard
					description={chef.description}
					img={chef.img}
					name={chef.name}
					restaurant={chef.restaurant}
				/>
			</div>
		</div>
	);
};

export default ChefOfTheWeek;
