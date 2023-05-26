import React, { useState } from "react";
import { API_RM } from "../constants/Api.constants";
import { useEffect } from "react";
import Cards from "../components/public/Cards/Cards";
import RyMServices from "../services/RyMServices";
import InputGroup from "../components/public/Filters/category/InputGroup";

const Episodes = () => {
	let [id, setId] = useState(1);
	let [datos, setDatos] = useState([]);
	let [results, setResults] = useState([]);
	let { episode, name, air_date } = datos;

	let url = API_RM.EPISODES(id);

	useEffect(() => {
		(async function () {
			let data = await fetch(url)
				.then((res) => res.json())
				.catch(console.error("no data found"));
			setDatos(data);

			let r = await Promise.all(
				data.characters.map((x) => {
					return RyMServices.getPage(x);
				})
			);
			setResults(r);
		})();
	}, [url]);

	return (
		<div className="container">
			<h1 className=" mt-4 text-center rymFont">
					Episo<span className="text-success fw-bold">des</span>
				</h1>
			<div className="row justify-content-centeralign-items-start">
				<div className="col-3 mt-5 pt-5">
					<h4 className="text-center mb-3 marker">Pick Episodes</h4>
					<InputGroup setId={setId} total={51} name={"Episode"} />
				</div>

				<div className="col-8">
					<div className="row my-5 justify-content-center">
						<div className="col-12 text-center fs-1 fw-bold">
							Episode: <span>{name === "" ? "Unknow" : name}</span>
						</div>
						<div className="col-6 text-center fs-5">{episode === "" ? "Unknow" : episode}</div>
						<div className="col-6 text-center fs-5">{air_date === "" ? "Unknow" : air_date}</div>
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

export default Episodes;
