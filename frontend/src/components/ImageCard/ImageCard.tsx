import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IChef } from '../ChefPage/ChefPage';

const ImageChef: React.FC<IChef> = (props: IChef) => {
	const { img, name, id } = props;
	const navigate = useNavigate();
	return (
		<div
			className="chef-card-element"
			onClick={() => navigate(`/ChefsPage/${id}`)}>
			<img
				src={img}
				alt="chef"
				className="chef-image"></img>
			<div className="chef-name">{name}</div>
		</div>
	);
};
export default ImageChef;
