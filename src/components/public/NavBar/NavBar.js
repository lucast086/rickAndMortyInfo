import React from "react";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-sm bg-body-tertiary">
			<div className="container ">
					<Link to="/" className="navbar-brand rymFont">
						Rick And Morty <span className="text-success fw-bold">INFO</span>
					</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className= "marker navbar-nav">
						<li className="nav-item">
						<NavLink className="nav-link" to="/">Characters</NavLink>
						</li>
						<li className="nav-item">
						<NavLink className="nav-link" to="/episodes">Episodes</NavLink>
						</li>
						<li className="nav-item">
						<NavLink className="nav-link" to="/location">Location</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
