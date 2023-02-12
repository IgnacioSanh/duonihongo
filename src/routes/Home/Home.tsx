import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "./components";

const Home = () => {
	return (
		<Flex h="100vh" flex={1} flexDirection="column">
			<Navbar />
			<Flex flex="1">
				<Sidebar />
				<Box p="1rem" width="100%">
					<Outlet />
				</Box>
			</Flex>
		</Flex>
	);
};

export default Home;
