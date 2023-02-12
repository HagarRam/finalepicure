import React from 'react';
import Footer from '../Footer/Footer';
import dish1 from '../../assets/yossiShitrit.svg';
import './ChefPage.css';
import ChefPageFilter from '../ChefPageFilter/ChefPageFilter';
import NavBar from '../NavBar/NavBar';
import ImageChef from '../ImageCard/ImageCard';

const data: object[] = [
	{
		image: dish1,
	},
	{
		image: dish1,
	},
	{
		image: dish1,
	},
	{
		image: dish1,
	},
	{
		image: dish1,
	},
	{
		image: dish1,
	},
	{
		image: dish1,
	},
	{
		image: dish1,
	},
	{
		image: dish1,
	},
];

const ChefsPage: React.FC = () => {
	return (
		<div>
			<NavBar />
			<ChefPageFilter />
			<div id="allthechefs">
				{data.map((chef: any) => (
					<ImageChef image={chef.image} />
				))}
			</div>
			<Footer />
		</div>
	);
};

export default ChefsPage;
