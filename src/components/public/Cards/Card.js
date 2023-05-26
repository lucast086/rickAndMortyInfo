import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_RM } from "../../../constants/Api.constants";

const Card = () => {
	let { id } = useParams();

	let [datos, setDatos] = useState([]);
	console.log(datos);
	let { name, status, gender, image, species, type, origin } = datos;

	let url = API_RM.CHARACTER_BY_ID(id);

	useEffect(() => {
		(async function () {
			let data = await fetch(url)
				.then((res) => res.json())
				.catch(console.error("no data found"));
			setDatos(data);
		})();
	}, [url]);

	return (
		// name, status, gender, image, species, type
		<div className="row justify-content-center">
			<div className="col-lg-6 col-8 m-4">
				<div className="card">
					<img src={image} className="card-img-top" />
					<div className="card-body text-start">
						<h5 className=" marker text-center card-title fs-3">{name}</h5>
						<p className="fs-6">
							Species: <span className="fs-5">{species === "" ? "Unknow" : species}</span>
						</p>
						<p className="fs-6">
							Type: <span className="fs-5">{type === "" ? "Unknow" : type}</span>
						</p>
						<p className="fs-6">
							Gender: <span className="fs-5">{gender === "" ? "Unknow" : gender}</span>
						</p>
						<p className="fs-6">
							Origin: <span className="fs-5">{origin?.name === "" ? "Unknow" : origin?.name}</span>
						</p>
						<p className="fs-6">
							Status: <span className="fs-5">{status === "" ? "Unknow" : status}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
