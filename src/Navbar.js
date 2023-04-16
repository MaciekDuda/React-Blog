import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>My Pure Blog <i className="fa-solid fa-paper-plane"></i></h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
			</div>
		</nav>
	);
};

export default Navbar;
