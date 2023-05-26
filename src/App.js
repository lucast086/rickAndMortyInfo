import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import "./fonts/RyMfont.ttf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/public/NavBar/NavBar";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import Card from "./components/public/Cards/Card";
import Footer from "./components/public/Footer/Footer";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/episodes" element={<Episodes />} />
				<Route path="/location" element={<Location />} />
				<Route path="/:id" element={<Card />} />
			</Routes>

			<Footer/>
		</Router>
	);
}
export default App;
