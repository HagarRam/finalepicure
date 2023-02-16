import React from 'react';
<<<<<<< Updated upstream
import MenuImg from '../../assets/claro.svg';
import './SignatureDish.css';
import meal from '../../assets/Lumina.svg';
import meal2 from '../../assets/tiger-lily.svg';
import DishCard from './DishCard';

=======
import './SignatureDish.css';
import DishCard from './DishCard';
// import data from '../../EpicureData.json'
import data from '../../data.json'
import { useSelector } from 'react-redux';
>>>>>>> Stashed changes
interface Dish {
	img: any;
	icon: string[];
	name: string;
	description: string;
	price: number;
}

<<<<<<< Updated upstream
const SignatureDish: React.FC = () => {
	const data: Dish[] = [
		{
			img: MenuImg,
			name: 'Claro',
			icon: ['spicy', 'vegan'],
			description:
				'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
			price: 3,
		},
		{
			img: meal2,
			name: 'Lumina',
			icon: [],
			description:
				'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
			price: 40,
		},
		{
			img: meal,
			name: 'tiger-lily',
			icon: ['vegitarian'],
			description:
				'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
			price: 200,
		},
	];

	return (
		<div id="dish-card">
			<div id="titlecard-dish">SIGNATURE DISH OF:</div>
			<div id="allthecards">
				{data.map((dataimg) => (
					<DishCard
						img={dataimg.img}
						icon={dataimg.icon}
						name={dataimg.name}
						description={dataimg.description}
						price={dataimg.price}
					/>
				))}
			</div>
		</div>
	);
};

export default SignatureDish;
=======

const SignatureDish: React.FC = () => {
  const SignatureDishData = useSelector((state:any) => state.dishes.value)
  let index:number= 0;
  return (
    <div id="dish-card">
      <div id="titlecard-dish">SIGNATURE DISH OF:</div>
      <div id="allthecard">
      <div id="dishes-card">
        {SignatureDishData.map((dish:any) => {
          if (index< 3 && dish.signatureDish) {    
              index += 1;
        return (
					<DishCard
					img={dish.img}
					icon={dish.icons}
					name={dish.name}
					description={dish.about}
					price={dish.price}
				/>
                  );
                } else {
                  return null;
                }
              })
            };
           
        
      </div>
      </div>
    </div>
  );
};

export default SignatureDish
>>>>>>> Stashed changes
