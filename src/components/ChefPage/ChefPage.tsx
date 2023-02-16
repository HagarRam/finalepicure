import React from 'react';
import Footer from '../Footer/Footer';
<<<<<<< Updated upstream
import dish1 from '../../assets/yossiShitrit.svg';
=======
>>>>>>> Stashed changes
import './ChefPage.css';
import ChefPageFilter from '../ChefPageFilter/ChefPageFilter';
import NavBar from '../NavBar/NavBar';
import ImageChef from '../ImageCard/ImageCard';
<<<<<<< Updated upstream

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

=======
import { useDispatch, useSelector } from "react-redux";
>>>>>>> Stashed changes
const ChefsPage: React.FC = () => {
	const chefData = useSelector((state:any) => state.chef.value)
	return (
		<div>
			<NavBar />
<<<<<<< Updated upstream
			<ChefPageFilter />
			<div id="allthechefs">
				{data.map((chef: any) => (
					<ImageChef image={chef.image} />
				))}
=======
			<div id="mobile-title">CHEFS</div>
			<ChefPageFilter />
			<div id="allthechefs">
				{chefData.map((chef:any) => {
					return <ImageChef chefName={chef.name} chefImage={chef.img} />;
				})}
>>>>>>> Stashed changes
			</div>
			<Footer />
		</div>
	);
};

export default ChefsPage;
