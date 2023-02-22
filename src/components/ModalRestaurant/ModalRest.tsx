import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import DishCard from '../SignatureDish/DishCard';
import './ModalRest.css';
import { Rootstate } from '../../store/store';

interface IModal {
	id: number;
	closeButton: Function;
}

const ModalRest: React.FC<IModal> = (props: IModal) => {
	const dishesData = useSelector((state: Rootstate) => state.dishes.value);
	let IdNum = props.id - 1;

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		window.scrollTo(0, 0);
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);
	const [number, setNumber] = useState<number>(0);

	const handlePlus = (): void => {
		setNumber(number + 1);
	};

	const handleMinus = (): void => {
		setNumber(number - 1);
	};

	return (
		<div className="restaurants-card">
			<div
				id="restaurants-card-Modal"
				className="modal">
				<div className="content">
					<span
						id="closeButton"
						onClick={() => props.closeButton()}
						className="close">
						&times;
					</span>
					<DishCard
						img={dishesData[IdNum].img}
						icons={dishesData[IdNum].icons}
						name={dishesData[IdNum].name}
						about={dishesData[IdNum].about}
						price={dishesData[IdNum].price}
						id={dishesData[IdNum].id}
						title={'card-dish-information-modal'}
						dishtitle={'dish-card-element-Modal'}
					/>
					<div className="bag-information">
						<div id="choose-a-side">
							<div className="highlight">Choose a side</div>
							<div>
								<input type="radio" /> White bread
							</div>
							<div>
								<input type="radio" /> Sticky rice
							</div>
						</div>
						<div id="Changes">
							<div className="highlight">Changes</div>

							<div>
								<input type="checkbox" /> Without peanut
							</div>
							<div>
								<input type="checkbox" /> Sticky Less spicy
							</div>
						</div>

						<div className="highlight">Quantity</div>
						<div id="Quantity">
							<button
								id="symbol"
								onClick={handleMinus}>
								-
							</button>
							<div id="symbol">{number}</div>
							<button
								id="symbol"
								onClick={handlePlus}>
								+
							</button>
						</div>
						<div>
							<button
								id="add-to-bag"
								type="submit">
								ADD TO BAG
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalRest;
