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
	const [comment, setComment] = useState<string[]>(['']);
	const [informationDIsh, setinformationDIsh] = useState<string[]>(['']);
	const [quantity, setQuantity] = useState<number>(0);
	let IdNum = props.id - 1;

	const [number, setNumber] = useState(0);
	const handlePlus = () => {
		setNumber(number + 1);
	};

	const handleMinus = () => {
		setNumber(number - 1);
	};

	const postInformation = () => {
		return comment;
		//to come back!!
	};

	return (
		<div className="restaurants-card">
			<div
				id="restaurants-card-Modal"
				className="modal">
				<div className="content">
					<form onSubmit={postInformation}>
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
									<input
										type="radio"
										value={'White bread'}
										onChange={(e) => setComment([...comment, e.target.value])}
									/>{' '}
									White bread
								</div>
								<div>
									<input
										type="radio"
										value={'Sticky rice'}
										onChange={(e) => setComment([...comment, e.target.value])}
									/>{' '}
									Sticky rice
								</div>
							</div>
							<div id="Changes">
								<div className="highlight">Changes</div>

								<div>
									<input
										value={'Without peanut'}
										type="checkbox"
										onChange={(e) => setComment([...comment, e.target.value])}
									/>{' '}
									Without peanut
								</div>
								<div>
									<input
										type="checkbox"
										value={'Sticky Less spicy'}
										onChange={(e) => setComment([...comment, e.target.value])}
									/>{' '}
									Sticky Less spicy
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
									value={number}
									id="add-to-bag"
									type="submit"
									onChange={(e: any) => setNumber(e.target.value)}>
									ADD TO BAG
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalRest;
