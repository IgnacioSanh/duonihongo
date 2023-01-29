import { Avatar, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "./components";

const Home = () => {
	return (
		<Flex h="100vh" flexDirection="column">
			<Navbar />
			<Flex flex="1">
				<Sidebar />
				<Box p="1rem">
					<Outlet />
				</Box>
			</Flex>
		</Flex>
	);
};

export default Home;
