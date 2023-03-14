import React from 'react';
import Footer from '../Footer/Footer';
import './ChefPage.css';
import ChefPageFilter from '../ChefPageFilter/ChefPageFilter';
import NavBar from '../NavBar/NavBar';
import ImageChef from '../ImageCard/ImageCard';
import { useSelector } from 'react-redux';
import { Rootstate } from '../../store/store';
import { ObjectId } from 'mongoose';

export interface IChef {
	_id: ObjectId;
	id?: number;
	name: string;
	restaurant?: ObjectId[];
	age?: number;
	icons?: string;
	img: string;
	description?: string;
	chefOfTheWeek?: boolean;
	newChef?: boolean;
	views?: number;
}

export interface IChefState {
	value: IChef[];
	filteredValue: IChef[];
}

const ChefsPage: React.FC = () => {
	const chefData = useSelector((state: Rootstate) => state.chef.filteredValue);
	return (
		<div>
			<NavBar />
			<div id="mobile-title">CHEFS</div>
			<ChefPageFilter />
			<div id="allthechefs">
				{chefData.map((chef: IChef) => {
					return (
						<ImageChef
							name={chef.name}
							img={chef.img}
							id={chef.id}
							key={chef.id}
							_id={chef._id}
						/>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default ChefsPage;
