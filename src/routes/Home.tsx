import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<Link to="library">Go to the library</Link>
			<Outlet />
		</>
	);
};

export default Home;
