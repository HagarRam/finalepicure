import React, { useState } from 'react';
import vegan from '../../assets/vegan.svg';
import vegitarian from '../../assets/Vegitarian.svg';
import spicy from '../../assets/spicy.svg';
import iconPrice from '../../assets/iconprice.svg';
import ModalRest from '../ModalRestaurant/ModalRest';

export interface IDishes {
	id: number;
	name: string;
	time?: string[];
	about: string;
	price: number;
	allergan?: string[];
	icons: string[];
	sides?: string[];
	changes?: string[];
	img: string;
	signatureDish?: boolean;
	title?: string;
	dishtitle: string;
}

const DishCard: React.FC<IDishes> = (props: IDishes) => {
	const typesEnum: { [key: string]: string } = {
		spicy: spicy,
		vegitarian: vegitarian,
		vegan: vegan,
	};

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const { img, icons, name, about, price, id, title, dishtitle } = props;

	const handleDishClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div
				className={dishtitle}
				onClick={handleDishClick}>
				<img
					className="img-rest"
					alt="dish"
					src={img}
				/>
				<div id={title}>
					<div className="dish-name">{name}</div>
					<div className="dishTypes">
						{icons.map((type: string) => (
							<img
								className="dish-img"
								alt="dish-type"
								src={typesEnum[String(type)]}
								key={type}
							/>
						))}
					</div>
					<div className="description">{about}</div>
					<div id="price-container">
						<hr id="hr-left" />
						<div id="price-with-icon">
							<img
								src={iconPrice}
								id="icon-price"></img>
							<div>{price}</div>
						</div>

						<hr id="hr-right" />
					</div>
				</div>
			</div>
			{isModalOpen && (
				<ModalRest
					id={id}
					closeButton={closeModal}
				/>
			)}
		</>
	);
};

export default DishCard;
