import React from 'react';
import './PopularRestaurants.css';
import RestaurantCard from './RestaurantCard';
<<<<<<< Updated upstream
import MenuIcon from '../../assets/claro.svg';
import dish1 from '../../assets/Lumina.svg';
import dish2 from '../../assets/tiger-lily.svg';
import { useNavigate } from 'react-router-dom';
=======
import { NavLink, useNavigate } from 'react-router-dom';
import data from '../../EpicureData.json'
import { useSelector } from 'react-redux';
import { setAllRestuarants } from '../../store/slices/restaurantsSlice';
>>>>>>> Stashed changes

interface Restaurant {
	img: any;
	name: string;
	chef: string;
	stars: number;
}

const PopularRestaurants: React.FC = () => {
<<<<<<< Updated upstream
	const navigate = useNavigate();
	const data: Restaurant[] = [
		{
			img: MenuIcon,
			name: 'Claro',
			chef: 'Hagar Ram',
			stars: 3,
		},
		{
			img: dish1,
			name: 'Lumina',
			chef: 'Hagar Ram',
			stars: 4,
		},
		{
			img: dish2,
			name: 'Tiger-lily',
			chef: 'Hagar Ram',
			stars: 5,
		},
	];
=======
  const restaurantsData = useSelector((state:any) => state.restaurants.value)
	const navigate = useNavigate();
  let index :number= 0;

  function dispatch(arg0: { payload: undefined; type: "restaurants/setAllRestuarants"; }): void {
    throw new Error('Function not implemented.');
  }
>>>>>>> Stashed changes

	return (
		<div id="restaurant-card ">
			<div id="titlecard">POPULAR RESTAURANT IN EPICURE:</div>
			<div id="allthecard">
<<<<<<< Updated upstream
				<div id="restaurantCard">
					{data.map((dataimg: Restaurant) => (
						<RestaurantCard
							title={'rest-card-element'}
							imgSource={dataimg.img}
							name={dataimg.name}
							chef={dataimg.chef}
							stars={dataimg.stars}
						/>
					))}
				</div>
			</div>
			<button
				id="all-the-Restaurants-button"
				onClick={() => navigate('/restaurant')}>
				All Restaurants {'>>'}
			</button>
=======
			<div id="restaurantCard">
  {restaurantsData.map((restaurant:any) => {
    if (index<3 && restaurant.popular) {
        index += 1;
          return (
          <RestaurantCard
            imgSource={restaurant.img}
            name={restaurant.name}
            chef={restaurant.chef}
            stars={restaurant.rating}
            title={"rest-card-element"}
          />
        );
        }
        else {
          return null;
        }
    }
  )
}
 
</div>
			</div>
      <NavLink to={"/Restaurant"}  onClick={()=>dispatch(setAllRestuarants())} id="all-the-Restaurants-button">
      All Restaurants {'>>'}
      </NavLink>
>>>>>>> Stashed changes
		</div>
	);
};

<<<<<<< Updated upstream
export default PopularRestaurants;
=======
  export default PopularRestaurants;
>>>>>>> Stashed changes
