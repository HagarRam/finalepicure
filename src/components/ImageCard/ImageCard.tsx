import React from "react";
import { IChef } from "../ChefPage/ChefPage";




const ImageChef: React.FC <IChef>=(props:IChef)=>  {
const {img, name} = props;
	return (
		<div className="chef-card-element">
			<img
				src={img}
				alt="chef"
				className="chef-image"></img>
			<div className="chef-name">{name}</div>
		</div>
	);
};
export default ImageChef;
