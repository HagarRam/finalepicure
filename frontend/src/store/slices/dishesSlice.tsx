import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';
import { IDishes } from '../../components/SignatureDish/DishCard';
// const [newDishes, setDishes] = useState<any>([]);
// const [id, setId] = useState<number>();
// const [name, setName] = useState<string>('');
// const [price, setPrice] = useState<number>();
// const [quantity, setQuantity] = useState<number>();
// const [img, setImg] = useState<string>('');
// const [comment, setComment] = useState<string[]>(['']);

const data = async () => {
	try {
		const response = await fetch('http://localhost:8000/dishes/', {
			method: 'GET',
		});
		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {
		console.log();
	}
};

// const orderDish = async (
// 	id: number,
// 	name: string,
// 	price: number,
// 	img: string,
// 	comment: string,
// 	quantity: number
// ) => {
// 	await fetch('http://localhost:8000/dishes/orderdish/', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			id: id,
// 			name: name,
// 			price: price,
// 			img: img,
// 			dishtitle: 'dish-order-card-element',
// 			comment: comment,
// 			quantity: quantity,
// 		}),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 	})
// 		.then((response) => response.json())
// 		.then((data) => {
// 			setDishes((dish: any) => [data, ...dish]),
// 				setId(0),
// 				setName(''),
// 				setPrice(0),
// 				setQuantity(0),
// 				setImg(''),
// 				setComment(['']);
// 		})
// 		.catch((err) => {
// 			console.log(err.message);
// 		});
// };

const dishes: IDishes[] = await data();

export const dishesSlice = createSlice({
	name: 'dishes',
	initialState: {
		value: dishes,
		filteredValue: dishes,
	},
	reducers: {
		createOrder: (state) => {
			state.filteredValue = state.value;
		},
	},
});

export default dishesSlice.reducer;
