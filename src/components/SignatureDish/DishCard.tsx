import React from 'react';
import vegan from '../../assets/vegan.svg';
import vegitarian from '../../assets/Vegitarian.svg';
import spicy from '../../assets/spicy.svg';
import iconPrice from '../../assets/iconprice.svg';
interface IDish {
	img: any;
	icon: string[];
	name: string;
	description: string;
	price: number;
}

const DishCard: React.FC<IDish> = (props: IDish) => {
	const typesEnum: { [key: string]: string } = {
		spicy: spicy,
		vegitarian: vegitarian,
		vegan: vegan,
	};
	const { img, icon, name, description, price } = props;

	return (
		<div className="dish-card-element">
			<img
				className="img-rest"
				alt="dish"
				src={img}
			/>
			<div id="card-dish-information">
				<div className="dish-name">{name}</div>
				<div className="dishTypes">
					{icon.map((type: string) => (
						<img
							className="dish-img"
							alt="dish-type"
							src={typesEnum[String(type)]}
							key={type}
						/>
					))}
				</div>
				<div className="description">{description}</div>
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
	);
};

export default DishCard;
