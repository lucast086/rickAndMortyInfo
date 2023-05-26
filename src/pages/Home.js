import Filters from "../components/public/Filters/Filters";
import Cards from "../components/public/Cards/Cards";
import { useEffect, useState } from "react";
import { API_RM } from "../constants/Api.constants";
import Pagination from "../components/public/Pagination/Pagination";
import Search from "../components/public/Search/Search";

const  Home = () => {
	let [ pageNumber, setPageNumber ] = useState(1);
	let [ search, setSearch ] =useState("");
	let [ datos, setDatos ] = useState([]);

	let [status, setStatus] = useState("");
	let [gender, setGender] = useState("");
	let [species, setSpecies] = useState("");

	let { info, results } = datos;
	let url = API_RM.CHARACTERS(pageNumber,search,status,gender,species);

	useEffect(() => {
		(async function () {
			let data = await fetch(url)
				.then((res) => res.json())
				.catch(console.error("no data found"));
			setDatos(data);
		})();
	}, [url]);

	return (
		<div className="App">
				<h1 className=" mt-4 text-center rymFont">
					Charac<span className="text-success fw-bold">ters</span>
				</h1>
			
			<Search setSearch={setSearch} setPageNumber={setPageNumber}/>
			<div className="container text-center">
				<div className="row">
						<Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
					<div className="col-lg-9 col-12">
						<div className="row">
							<Cards results={results} />
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<Pagination pages={info?.pages} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
			</div>
		</div>
	);
}
export default Home;