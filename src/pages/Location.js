import React, { useState } from "react";
import { API_RM } from "../constants/Api.constants";
import { useEffect } from "react";
import Cards from "../components/public/Cards/Cards";
import RyMServices from "../services/RyMServices";
import InputGroup from "../components/public/Filters/category/InputGroup";

const Location = () => {
	let [id, setId] = useState(1);
	let [datos, setDatos] = useState([]);
	let [results, setResults] = useState([]);
	let { type, name, dimension } = datos;

	let url = API_RM.LOCATION(id);

	useEffect(() => {
		(async function () {
			let data = await fetch(url)
				.then((res) => res.json())
				//falta mejorar el catch
				.catch(console.error("no data found"));
			setDatos(data);

			let r = await Promise.all(
				data.residents.map((x) => {
					return RyMServices.getPage(x);
				})
			);
			setResults(r);
		})();
	}, [url]);

	return (
		<div className="container">
			<h1 className=" mt-4 text-center rymFont">
				Loca<span className="text-success fw-bold">tion</span>
			</h1>
			<div className="row justify-content-center">
				<div className="col-3 mt-5 pt-5">
					<h4 className="text-center mb-3 marker">Pick Locations</h4>
					<InputGroup setId={setId} total={126} name={"Location"} />
				</div>

				<div className="col-8">
					<div className="row my-5 justify-content-center">
						<div className="col-12 text-center fs-1 fw-bold">
							Location: <span>{name === "" ? "Unknow" : name}</span>
						</div>
						<div className="col-6 text-center fs-5">{type === "" ? "Unknow" : `Type: ${type}`}</div>
						<div className="col-6 text-center fs-5">{dimension === "" ? "Unknow" : `Dimension: ${dimension}`}</div>
						<div className="col-12 mt-5">
							<div className="row justify-content-center">
								<Cards results={results} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
